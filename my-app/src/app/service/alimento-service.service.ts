import { Injectable } from '@angular/core';
import { Alimento } from '../classes/alimento';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentoServiceService {
  private URLbackend = 'http://localhost:8080/Alimentos';
  alimento: Alimento = new Alimento();
  constructor(private http: HttpClient) {}

  addAlimento(alimento: Alimento): Observable<string> {
    const url = this.URLbackend + "/post";
    return this.http.post(url, alimento, {responseType: 'text'});
  }

  getAlimento() {
    const URL = this.URLbackend + "/getAll";
    return this.http.get<Alimento[]>(URL).pipe(map(rawList => { return rawList }));
  }

  getAlimentoAtivo() {
    const URL = `${this.URLbackend}/getByStatus/${true}`;
    return this.http.get<Alimento[]>(URL).pipe(map(rawList => { return rawList }));
  }

  getAlimentoAvenda(id: number) {
    const URL = `${this.URLbackend}/getByIdAndAtivo/${id}/${true}`;
    return this.http.get<Alimento[]>(URL).pipe(map(rawList => { return rawList }));
  }

  getAlimentoVendido(id: number) {
    const URL = `${this.URLbackend}/getByIdAndAtivo/${id}/${false}`;
    return this.http.get<Alimento[]>(URL).pipe(map(rawList => { return rawList }));
  }

  deletarAlimento(id: number): Observable<string> {
    const url = `${this.URLbackend}/delete/${id}`;
    return this.http.delete(url, {responseType: 'text'});
  }
  

  editarAlimento(id: number, alimento: Alimento): Observable<string> {
    const url = `${this.URLbackend}/update/${id}`;
    return this.http.put(url, alimento, {responseType: 'text'});

  }

  setIdAlimento(id: number) {
    this.alimento.id = id;
  }

  getIdAlimento(): Alimento {
    return this.alimento;
  }
}
