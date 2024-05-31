import { Injectable } from '@angular/core';
import { Direcionar } from '../classes/Direcionar';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirecionarService {

  private URLbackend = 'http://localhost:8080/Direcionar';

  constructor(private http: HttpClient) {}

  postDirecionar(idUsuario: number, direcionar: Direcionar): Observable<string> {
    const url = `${this.URLbackend}/post/${idUsuario}`;
    return this.http.post(url, direcionar, {responseType: 'text'});
  }

  getDirecionar(): Observable<Direcionar[]>{
    const url = this.URLbackend + "/getAll";
    return this.http.get<Direcionar[]>(url).pipe(map(rawList => { return rawList }));
  }

  deleteDirecionar(id: number): Observable<string>{
    const url = `${this.URLbackend}/delete/${id}`;
    return this.http.delete(url, {responseType: 'text'});
  }
}
