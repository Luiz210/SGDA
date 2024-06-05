import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlimentoServiceService } from '../service/alimento-service.service';
import { Alimento } from '../classes/alimento';
import { ViewTelasService } from '../service/view-telas.service';
import { Usuario } from '../classes/Usuario';
import { LoginService } from '../service/login.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-cadastro-alimento',
  templateUrl: './cadastro-alimento.component.html',
  styleUrls: ['./cadastro-alimento.component.scss']
})
export class CadastroAlimentoComponent {
  private usuario: Usuario = new Usuario();
  private selectedAlimentoIndex: number;
  alimentoForm: FormGroup;
  formEdicao: FormGroup;
  listaAlimentos: Alimento[];
  hoje = new Date();
  data = this.hoje.toISOString().substring(0, 10);

  constructor(
    private meuServico: AlimentoServiceService,
    private fb: FormBuilder,
    private viewTelasService: ViewTelasService,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef
  ) {}

  voltar(value: boolean) {
    this.viewTelasService.setcadastroalimento(value);
  }

  mostrarTelaInicialVendedor(value: boolean){
    this.viewTelasService.setTelaInicialVendendor(value);
  }

  editarAlimento(index: number, item: Alimento) {
    this.selectedAlimentoIndex = index;
    this.formEdicao.patchValue(item);
    const dataValidadeControl = this.formEdicao.get('dataValidade');
    if (dataValidadeControl) {
        dataValidadeControl.setValue(null);
    }
    this.getListaAlimento();
    this.cd.detectChanges();
  }

  salvarEdicao() {
    const idAlimento = this.listaAlimentos[this.selectedAlimentoIndex].id;
    this.meuServico.editarAlimento(idAlimento, this.formEdicao.value).subscribe({
      next: (response) => {
        this.notificationService.showMessage(response);
        this.getListaAlimento();
      },
      complete: () => {
        this.getListaAlimento();
      },
      error: (e) => {
        this.notificationService.showMessage(e.error);
        console.log(e);
      }
    });
    this.getListaAlimento();
  }

  deletarAlimento(index: number) {
    const idAlimento = this.listaAlimentos[index].id;
    this.meuServico.deletarAlimento(idAlimento).subscribe({
      next: (response) => {
        this.notificationService.showMessage(response);
        this.getListaAlimento();
      },
      error: (e) => {
        this.notificationService.showMessage(e.error.text);
        this.getListaAlimento();
      },
      complete: () => {
        this.getListaAlimento();
      }
    });
  }

  cadastrarAlimento() {
    const alimento = this.alimentoForm.value;
    alimento.dataCadastro = this.data;
    alimento.usuario = this.loginService.getIdUsuario();
    alimento.status = true;
    this.meuServico.addAlimento(alimento).subscribe({
      next: (response) => {
        this.notificationService.showMessage(response);
        this.getListaAlimento();
        this.alimentoForm.reset();
      },
      complete: () => {
        this.getListaAlimento();
      },
      error: (e) => {
        this.notificationService.showMessage(e.error);
      }
    });
  }

  ngOnInit() {
    this.cadastroAlimento();
    this.getListaAlimento();
    this.edicaoAlimento();
  }

  getListaAlimento() {
    this.usuario = this.loginService.getIdUsuario();
    this.meuServico.getAlimentoAvenda(this.usuario.id).subscribe(resut => {
      this.listaAlimentos = resut;
    });
  }

  cadastroAlimento() {
    this.alimentoForm = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      dataCadastro: [this.data],
      dataValidade: ['', Validators.required],
    });
  }

  edicaoAlimento() {
    this.formEdicao = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      dataCadastro: [this.data],
      dataValidade: ['', Validators.required],
    });
  }
}
