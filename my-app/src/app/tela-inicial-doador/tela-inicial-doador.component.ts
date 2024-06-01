import { Component } from '@angular/core';
import { ViewTelasService } from '../service/view-telas.service';

@Component({
  selector: 'app-tela-inicial-doador',
  templateUrl: './tela-inicial-doador.component.html',
  styleUrls: ['./tela-inicial-doador.component.scss']
})
export class TelaInicialDoadorComponent {

  constructor(
    private viewTelasService: ViewTelasService
  ) {}

  mostrarTelaDoacao(value: boolean) {
    this.viewTelasService.setteladoacao(value);
  }

  mostrarTelaComprovante(value: boolean) {
    this.viewTelasService.settelacomprovante(value);
  }
}
