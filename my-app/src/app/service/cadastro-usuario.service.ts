import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../classes/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private http: HttpClient) {}

  private URLbackend = 'http://localhost:8080/Usuarios';

  cadastrarUsuario(usuario: Usuario): Observable<string> {
    const url = this.URLbackend + "/post";
    return this.http.post(url, usuario, {responseType: 'text'});
  }
}
