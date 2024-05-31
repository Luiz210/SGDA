import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../classes/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usuario: Usuario = new Usuario();
  private URLbackend = 'http://localhost:8080/Usuarios';
  constructor(private http: HttpClient) {}

  login(usuario: Usuario): Observable<Usuario> {
    const url = this.URLbackend + "/login";
    return this.http.post<Usuario>(url, usuario);
  }

  setUsuarioSaldo(saldo: number) {
    this.usuario.saldo = saldo;
  }

  getUsuarioSaldo(): number {
    return this.usuario.saldo;
  }

  setIdUsuario(id: number) {
    this.usuario.id = id;
  }

  getIdUsuario(): Usuario {
    return this.usuario;
  }

  getUsuarioId(): number {
    return this.usuario.id;
  }
}
