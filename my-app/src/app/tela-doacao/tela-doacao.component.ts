import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pagamento } from '../classes/pagamento';
import { PagamentoService } from '../service/pagamento.service';
import { ViewTelasService } from '../service/view-telas.service';
import { Usuario } from '../classes/Usuario';
import { LoginService } from '../service/login.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-tela-doacao',
  templateUrl: './tela-doacao.component.html',
  styleUrls: ['./tela-doacao.component.scss']
})
export class TelaDoacaoComponent {

  doacaoForm: FormGroup;
  pagamentos: Pagamento[];
  usuario: Usuario = new Usuario();
  hoje = new Date();
  data = this.hoje.toISOString().substring(0, 10);

  constructor(private pagamentoService: PagamentoService,
    private fb: FormBuilder,
    private viewTelasService: ViewTelasService,
    private loginService: LoginService,
    private notificationService: NotificationService) {}


  mostrarTelaInicialDoador(value: boolean){
    this.viewTelasService.settelaInicialDoador(value);
  }

  voltar(value: boolean) {
    this.viewTelasService.setteladoacao(value);
  }

  cadastrarPagamento() {
    const pagamento = this.doacaoForm.value;
    pagamento.usuario = this.loginService.getIdUsuario();
    console.log(pagamento);
    this.pagamentoService.addPagamento(pagamento).subscribe({
      next: (response) => {
        this.notificationService.showMessage(response);
      },
      error: (e) => {
        this.notificationService.showMessage(e.error);
      }}
    );
    this.doacaoForm.reset();;
  }

  ngOnInit() {
    this.cadastroPagamentoForm();
  }

  cadastroPagamentoForm() {
    this.doacaoForm = this.fb.group({
      quantia: ['', Validators.required],
      formaPagamento: ['', Validators.required],
      date: [this.data, Validators.required]
    })
  }
}
