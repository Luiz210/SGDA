import { Component } from '@angular/core';
import { ViewTelasService } from '../service/view-telas.service';

@Component({
  selector: 'app-tela-logado-inicial',
  templateUrl: './tela-logado-inicial.component.html',
  styleUrls: ['./tela-logado-inicial.component.scss']
})
export class TelaLogadoInicialComponent {

  constructor(
    private viewTelasService: ViewTelasService
  ) {}

  mostrarTelaDirecionar(value: boolean) {
    this.viewTelasService.setteladirecionar(value);
  }

  mostrarTelaOngs(value: boolean) {
    this.viewTelasService.settelaongs(value);
  }

  mostrarCadastrarOngs(value: boolean) {
    this.viewTelasService.setcadastrarongs(value);
  }

  mostrarListaDirecionar(value: boolean){
    this.viewTelasService.setListaDirecionar(value);
  }

  mostrarTelaInicialAdmin(value: boolean){
    this.viewTelasService.settelaInicialAdmin(value);
  }
}
