import { Component } from '@angular/core';
import { ViewTelasService } from '../service/view-telas.service';

@Component({
  selector: 'app-tela-inicial-vendedor',
  templateUrl: './tela-inicial-vendedor.component.html',
  styleUrls: ['./tela-inicial-vendedor.component.scss']
})
export class TelaInicialVendedorComponent {

  constructor(
    private viewTelasService: ViewTelasService
  ) {}

  mostrarTelaCadastroAlimentos(value: boolean) {
    this.viewTelasService.setcadastroalimento(value);
  }

  mostrarTelaVendas(value: boolean) {
    this.viewTelasService.settelavendas(value);
  }

  mostrarTelaInicialVendedor(value: boolean) {
    this.viewTelasService.setTelaInicialVendendor(value);
  }
}
