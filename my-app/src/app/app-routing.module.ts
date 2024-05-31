import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaLogadoComponent } from './tela-logado/tela-logado.component';
import { CadastroAlimentoComponent } from './cadastro-alimento/cadastro-alimento.component';
import { TelaVendidosComponent } from './tela-vendidos/tela-vendidos.component';
import { CadastrarOngsComponent } from './cadastrar-ongs/cadastrar-ongs.component';

const routes: Routes = [
  {path: '', component: TelaInicialComponent},
  {path: 'Cadastro', component: TelaCadastroComponent,},
  {path: 'Logado', component: TelaLogadoComponent},
  {path: 'CadastroAlimento', component: CadastroAlimentoComponent},
  {path: 'TelaVendidos', component: TelaVendidosComponent},
  {path: 'ListaOng', component: CadastrarOngsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
