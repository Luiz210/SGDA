import { Component } from '@angular/core';
import { AlimentoServiceService } from '../service/alimento-service.service';
import { Alimento } from '../classes/alimento';
import { Pagamento } from '../classes/pagamento';
import { ViewTelasService } from '../service/view-telas.service';


@Component({
  selector: 'app-tela-logado',
  templateUrl: './tela-logado.component.html',
  styleUrls: ['./tela-logado.component.scss']
})
export class TelaLogadoComponent {
  listaAlimentos: Alimento[];
  listaPagamento: Pagamento[];

  constructor(
    private alimentoService: AlimentoServiceService,
    private viewTelasService: ViewTelasService
  ) {}

  ngOnInit() {
    this.getListaAlimentos();
  }

  desativarTelas(ativo: boolean){
    this.viewTelasService.setcadastrarongs(ativo);
    this.viewTelasService.setcadastroalimento(ativo);
    this.viewTelasService.settelacomprovante(ativo);
    this.viewTelasService.setteladirecionar(ativo);
    this.viewTelasService.setteladoacao(ativo);
    this.viewTelasService.settelaongs(ativo);
    this.viewTelasService.settelavendas(ativo);
  }

  getListaDirecionar(): boolean{
    return this.viewTelasService.getListaDirecionar();
  }

  mostrarListaDirecionar(value: boolean){
    this.viewTelasService.setListaDirecionar(value);
  }

  getListaAlimentos() {
    this.alimentoService.getAlimento();
  }

  mostrarTelaCadastroAlimentos(value: boolean) {
    this.viewTelasService.setcadastroalimento(value);
  }

  mostrarTelaVendas(value: boolean) {
    this.viewTelasService.settelavendas(value);
  }

  mostrarTelaDoacao(value: boolean) {
    this.viewTelasService.setteladoacao(value);
  }

  mostrarTelaComprovante(value: boolean) {
    this.viewTelasService.settelacomprovante(value);
  }

  mostrarTelaDirecionar(value: boolean) {
    this.viewTelasService.setteladirecionar(value);
  }

  mostrarTelaOngs(value: boolean) {
    this.viewTelasService.settelaongs(value);
  }

  mostrarCadastrarOngs(value: boolean) {
    this.viewTelasService.setcadastrarongs(value);
  }

  getCadastroAlimento(): boolean {
    return this.viewTelasService.getcadastroalimento();
  }

  getTelaVendas(): boolean {
    return this.viewTelasService.gettelavendas();
  }

  getTelaDoacao(): boolean {
    return this.viewTelasService.getteladoacao();
  }

  getTelaComprovante(): boolean {
    return this.viewTelasService.gettelacomprovante();
  }

  getTelaDirecionar(): boolean {
    return this.viewTelasService.getteladirecionar();
  }

  getTelaOngs(): boolean {
    return this.viewTelasService.gettelaongs();
  }

  getCadastroOngs(): boolean {
    return this.viewTelasService.getcadastrarongs();
  }

  getloginEmpresa(): boolean {
    return this.viewTelasService.getLoginEmpresa();
  }

  getloginDoador(): boolean {
    return this.viewTelasService.getLoginDoador();
  }

  getloginGestor(): boolean {
    return this.viewTelasService.getLoginGestor();
  }

  getTelaInicialVendedor(){
    return this.viewTelasService.getTelainicialVendedor();
  }

  mostrarTelaInicialVendedor(value: boolean){
    this.viewTelasService.setTelaInicialVendendor(value);
  }

  getTelaInicialDoador(){
    return this.viewTelasService.gettelaInicialDoador();
  }

  mostrarTelaInicialDoador(value: boolean){
    this.viewTelasService.settelaInicialDoador(value);
  }

  gettelaInicialAdmin(): boolean{
    return this.viewTelasService.gettelaInicialAdmin();
  }

  mostrartelaInicialAdmin(value: boolean){
    this.viewTelasService.settelaInicialAdmin(value);
  }
}
