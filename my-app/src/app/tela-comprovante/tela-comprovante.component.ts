import { Component } from '@angular/core';
import { Pagamento } from '../classes/pagamento';
import { ViewTelasService } from '../service/view-telas.service';
import { PagamentoService } from '../service/pagamento.service';
import { Usuario } from '../classes/Usuario';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-tela-comprovante',
  templateUrl: './tela-comprovante.component.html',
  styleUrls: ['./tela-comprovante.component.scss']
})
export class TelaComprovanteComponent {
  pagamentos: Pagamento[];
  usuario: Usuario = new Usuario();

  constructor(private viewTelasService: ViewTelasService,
    private doacaoService: PagamentoService,
    private loginService: LoginService) {}

  getListaDoacao() {
    this.usuario = this.loginService.getIdUsuario();
    return this.doacaoService.getPagamento(this.usuario.id).subscribe(result => { this.pagamentos = result });
  }

  ngOnInit() {
    this.getListaDoacao();
  }

  voltar(value: boolean) {
    this.viewTelasService.settelacomprovante(value);
  }
}
