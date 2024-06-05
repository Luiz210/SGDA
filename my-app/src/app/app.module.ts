import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { MatIconModule } from '@angular/material/icon';
import { TelaLogadoComponent } from './tela-logado/tela-logado.component';
import { CadastroAlimentoComponent } from './cadastro-alimento/cadastro-alimento.component';
import { TelaVendidosComponent } from './tela-vendidos/tela-vendidos.component';
import { TelaDoacaoComponent } from './tela-doacao/tela-doacao.component';
import { TelaComprovanteComponent } from './tela-comprovante/tela-comprovante.component';
import { DirecionarAlimentosComponent } from './direcionar-alimentos/direcionar-alimentos.component';
import { CadastrarOngsComponent } from './cadastrar-ongs/cadastrar-ongs.component';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ListaDirecionarComponent } from './lista-direcionar/lista-direcionar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NotificationComponent } from './notification/notification.component';
import { TelaInicialVendedorComponent } from './tela-inicial-vendedor/tela-inicial-vendedor.component';
import { TelaLogadoInicialComponent } from './tela-inicial-admin/tela-logado-inicial.component';
import { TelaInicialDoadorComponent } from './tela-inicial-doador/tela-inicial-doador.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaCadastroComponent,
    TelaInicialComponent,
    TelaLogadoComponent,
    CadastroAlimentoComponent,
    TelaVendidosComponent,
    TelaDoacaoComponent,
    TelaComprovanteComponent,
    DirecionarAlimentosComponent,
    CadastrarOngsComponent,
    ListaDirecionarComponent,
    NotificationComponent,
    TelaInicialVendedorComponent,
    TelaLogadoInicialComponent,
    TelaInicialDoadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
