import { Component } from '@angular/core';
import { Ong } from '../classes/ong';
import { CadastroOngService } from '../service/cadastro-ong.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewTelasService } from '../service/view-telas.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-cadastrar-ongs',
  templateUrl: './cadastrar-ongs.component.html',
  styleUrls: ['./cadastrar-ongs.component.scss']
})
export class CadastrarOngsComponent {

  private selectedOngIndex: number;
  ongForm: FormGroup;
  ongFormCadastro: FormGroup;
  listaOng: Ong[];


  constructor(private ongService: CadastroOngService,
    private fb: FormBuilder,
    private viewTelasService: ViewTelasService,
    private notificationService: NotificationService) { }

  voltar(value: boolean) {
    this.viewTelasService.setcadastrarongs(value);
  }

  mostrarTelaInicialAdmin(value: boolean){
    this.viewTelasService.settelaInicialAdmin(value);
  }

  trocarTela(value: boolean) {
    this.viewTelasService.settelaongs(value);
  }

  getAllOngs() {
    this.ongService.getOngs().subscribe(resut => { this.listaOng = resut });
  }

  ngOnInit() {
    this.criarForm();
    this.getAllOngs();
    this.createCadastro();
  }

  deletarOng(index: number) {
    const idOng = this.listaOng[index].id;
    this.ongService.deletarOng(idOng).subscribe({
      next: (response) => {
        this.notificationService.showMessage(response);
        this.getAllOngs();
      },
      complete: () => {
        this.getAllOngs();
      },
      error: (e) => {
        this.notificationService.showMessage(e.error);
      }
    });

  }

  editarOng(index: number, ong: Ong) {
    this.selectedOngIndex = index;
    this.ongForm.patchValue(ong);
    this.ongService.editarOng(index, ong).subscribe({
      next: () => {
        this.getAllOngs();
      },
      complete: () => {
        this.getAllOngs();
      },
      error: () => {
      }
    });

  }

  salvarEdicao() {
    const idOng = this.listaOng[this.selectedOngIndex].id;
    this.ongService.editarOng(idOng, this.ongForm.value).subscribe({
      next: (response) => {
        this.notificationService.showMessage(response);
        this.getAllOngs();
      },
      complete: () => {
        this.getAllOngs();
      },
      error: (e) => {
        this.notificationService.showMessage(e.error);
      }});
  }

  cadastrarOng() {
    this.ongService.addOng(this.ongFormCadastro.value).subscribe({
      next: (response) => {
        this.notificationService.showMessage(response);
        this.getAllOngs();
      },
      complete: () => {
        this.getAllOngs();
      },
      error: (e) => {
        this.notificationService.showMessage(e.error);
      }
    });
  }

  criarForm() {
    this.ongForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  createCadastro() {
    this.ongFormCadastro = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }
}
