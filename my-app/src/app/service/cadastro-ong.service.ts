import { Injectable } from '@angular/core';
import { Ong } from '../classes/ong';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CadastroOngService {

  listOngs: Ong[] = [];
  ong: Ong = new Ong();
  URLbackend = 'http://localhost:8080/Ongs';
  constructor(private http: HttpClient) {}

  addOng(ong: Ong): Observable<string> {
    const url = this.URLbackend + "/post";
    return this.http.post(url, ong, {responseType: 'text'});
  }

  getOngs() {
    const url = this.URLbackend + "/getAll";
    return this.http.get<Ong[]>(url).pipe(map(rawList => { return rawList }));
  }

  deletarOng(id: number): Observable<string> {
    const url = `${this.URLbackend}/delete/${id}`;
    return this.http.delete(url, {responseType: 'text'});
  }

  editarOng(id: number, ong: Ong): Observable<string> {
    const url = `${this.URLbackend}/update/${id}`;
    return this.http.put(url, ong, {responseType: 'text'});
  }

  setOng(ongId: number) {
    this.ong.id = ongId;
  }

  getOng(): Ong {
    return this.ong;
  }
}
