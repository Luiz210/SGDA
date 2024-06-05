import { Component } from '@angular/core';
import { Alimento } from '../classes/alimento';
import { ViewTelasService } from '../service/view-telas.service';
import { Ong } from '../classes/ong';
import { CadastroOngService } from '../service/cadastro-ong.service';
import { AlimentoServiceService } from '../service/alimento-service.service';
import { Direcionar } from '../classes/Direcionar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DirecionarService } from '../service/direcionar.service';
import { LoginService } from '../service/login.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-direcionar-alimentos',
  templateUrl: './direcionar-alimentos.component.html',
  styleUrls: ['./direcionar-alimentos.component.scss'],
})
export class DirecionarAlimentosComponent {

  saldo: number;
  listaAlimentos: Alimento[];
  listaOng: Ong[];
  direcionarForm: FormGroup;
  selectAlimentoIndex: number = -1;
  selectOngIndex: number = -1;
  showDataEntrega: boolean = false;
  constructor(
    private viewTelasService: ViewTelasService,
    private alimentoService: AlimentoServiceService,
    private loginService: LoginService,
    private ongService: CadastroOngService,
    private fb: FormBuilder,
    private direcionarService: DirecionarService,
    private notificationService: NotificationService) {}

  ngOnInit() {
    this.getListaAlimento();
    this.getSaldo();
    this.getListaOng();
    this.DirecionarAlimento();
  }
  
  mostrarTelaInicialAdmin(value: boolean){
    this.viewTelasService.settelaInicialAdmin(value);
  }

  voltar(value: boolean) {
    this.viewTelasService.setteladirecionar(value);
  }

  getSaldo(){
    this.saldo = this.loginService.getUsuarioSaldo();
  }

  getListaAlimento() {
    this.alimentoService.getAlimentoAtivo().subscribe(resut => { this.listaAlimentos = resut });
  }

  getListaOng() {
    this.ongService.getOngs().subscribe(resut => { this.listaOng = resut });
  }

  postDirecionar() {
    const idUsuario = this.loginService.getUsuarioId();
    const idAlimento = this.alimentoService.getIdAlimento();
    const idOng = this.ongService.getOng();
    idOng.id = this.listaOng[this.selectOngIndex].id;
    idAlimento.id = this.listaAlimentos[this.selectAlimentoIndex].id;
    const direcionar: Direcionar = this.direcionarForm.value;
    direcionar.ong = idOng;
    direcionar.alimento = idAlimento;
    this.direcionarService.postDirecionar(idUsuario, direcionar).subscribe({
      next: (response) => {
        this.notificationService.showMessage(response);
        this.getListaAlimento();
        this.getSaldo();
      },
      complete: () => {
        this.getListaAlimento();
        this.getSaldo();
      },
      error: (e) => {
        this.notificationService.showMessage(e.error);
      }
    });
    this.direcionarForm.reset();
  }

  DirecionarAlimento() {
    this.direcionarForm = this.fb.group({
      data_entrega: ['', Validators.required]
    });
  }

  selectItemAlimento(index: number) {
    this.selectAlimentoIndex = index;
  }

  selectItemOng(index: number) {
    this.selectOngIndex = index;
  }
}