import { Component } from '@angular/core';
import { ViewTelasService } from '../service/view-telas.service';
import { AlimentoServiceService } from '../service/alimento-service.service';
import { LoginService } from '../service/login.service';
import { Usuario } from '../classes/Usuario';
import { Alimento } from '../classes/alimento';

@Component({
  selector: 'app-tela-vendidos',
  templateUrl: './tela-vendidos.component.html',
  styleUrls: ['./tela-vendidos.component.scss']
})
export class TelaVendidosComponent {

  private usuario: Usuario = new Usuario();
  listaAlimentos: Alimento[];

  constructor(private viewTelasService: ViewTelasService, 
    private alimentoService: AlimentoServiceService, 
    private loginService: LoginService) {}

  getListaAlimento() {
    this.usuario = this.loginService.getIdUsuario();
    this.alimentoService.getAlimentoVendido(this.usuario.id).subscribe(resut => { this.listaAlimentos = resut });
  }

  ngOnInit() {
    this.getListaAlimento();
  }

  voltar(value: boolean) {
    this.viewTelasService.settelavendas(value);
  }
}
