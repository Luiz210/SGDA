import { Component } from '@angular/core';
import { Direcionar } from '../classes/Direcionar';
import { DirecionarService } from '../service/direcionar.service';
import { ViewTelasService } from '../service/view-telas.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-lista-direcionar',
  templateUrl: './lista-direcionar.component.html',
  styleUrls: ['./lista-direcionar.component.scss']
})
export class ListaDirecionarComponent {

  direcionars: Direcionar[];

  constructor(
    private direcionarService: DirecionarService, 
    private viewTelasService: ViewTelasService,
    private notificationService: NotificationService){

  }
  voltar(ativo: boolean){
    this.viewTelasService.setListaDirecionar(ativo);
  }
  getAll(){
    this.direcionarService.getDirecionar().subscribe(resut => { this.direcionars = resut });
  }

  deletarDirecioanr(index: number){
    const idDirecionar = this.direcionars[index].id;
    this.direcionarService.deleteDirecionar(idDirecionar).subscribe({
      next: (response) => {
        this.notificationService.showMessage(response);
        this.getAll();
      },
      complete: () => {
        this.getAll();
      },
      error: (e) => {
        this.notificationService.showMessage(e.error);
      }
    });
  }

  ngOnInit(){
    this.getAll();
  }
}
