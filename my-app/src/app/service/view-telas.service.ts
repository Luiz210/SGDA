import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewTelasService {

  private loginEmpresa: boolean = false;
  private loginDoador: boolean = false;
  private loginGestor: boolean = false;
  private cadastroAlimento: boolean = false;
  private telaVendas: boolean = false;
  private telaDoacao: boolean = false;
  private telaComprovante: boolean = false;
  private telaDirecionar: boolean = false;
  private cadastrarOngs: boolean = false;
  private telaOngs: boolean = false;
  private listaDirecionar: boolean = false;
  private telaInicialVendendor: boolean = false;
  private telaInicialDoador: boolean = false;
  private telaInicialAdmin: boolean = false;

  gettelaInicialAdmin(): boolean {
    return this.telaInicialAdmin;
  }
  
  settelaInicialAdmin(value: boolean) {
    this.telaInicialAdmin = value;
  }

  gettelaInicialDoador(){
    return this.telaInicialDoador;
  }

  settelaInicialDoador(value: boolean){
    this.telaInicialDoador = value;
  }

  getTelainicialVendedor(): boolean{
    return this.telaInicialVendendor;
  }

  setTelaInicialVendendor(value: boolean){
    this.telaInicialVendendor = value;
  }

  getListaDirecionar(): boolean{
    return this.listaDirecionar;
  }

  setListaDirecionar(listaDirecionar: boolean){
    this.listaDirecionar = listaDirecionar;
  }

  getLoginEmpresa(): boolean {
    return this.loginEmpresa;
  }

  setLoginEmpresa(value: boolean) {
    this.loginEmpresa = value;
  }

  getLoginDoador(): boolean {
    return this.loginDoador;
  }

  setLoginDoador(value: boolean) {
    this.loginDoador = value;
  }

  getLoginGestor(): boolean {
    return this.loginGestor;
  }

  setLoginGestor(value: boolean) {
    this.loginGestor = value;
  }

  getcadastroalimento(): boolean {
    return this.cadastroAlimento;
  }
  setcadastroalimento(value: boolean) {
    this.cadastroAlimento = value;
  }

  gettelavendas(): boolean {
    return this.telaVendas;
  }
  settelavendas(value: boolean) {
    this.telaVendas = value;
  }

  getteladoacao(): boolean {
    return this.telaDoacao;
  }

  setteladoacao(value: boolean) {
    this.telaDoacao = value;
  }

  gettelacomprovante(): boolean {
    return this.telaComprovante;
  }

  settelacomprovante(value: boolean) {
    this.telaComprovante = value;
  }

  getteladirecionar(): boolean {
    return this.telaDirecionar;
  }

  setteladirecionar(value: boolean) {
    this.telaDirecionar = value;
  }

  gettelaongs(): boolean {
    return this.telaOngs;
  }

  settelaongs(value: boolean) {
    this.telaOngs = value
  }

  getcadastrarongs(): boolean {
    return this.cadastrarOngs;
  }
  setcadastrarongs(value: boolean) {
    this.cadastrarOngs = value;
  }

}
