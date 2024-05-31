import { Injectable } from '@angular/core';
import { Pagamento } from '../classes/pagamento';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private URLbackend = 'http://localhost:8080/Doacoes';

  constructor(private http: HttpClient) {}

  addPagamento(pagamento: Pagamento): Observable<string> {
    const url = `${this.URLbackend}/post/${1}`;
    return this.http.post(url, pagamento, {responseType: 'text'});
  }

  getPagamento(id: number) {
    const URL = `${this.URLbackend}/getById/${id}`;
    return this.http.get<Pagamento[]>(URL).pipe(map(rawList => { return rawList }));
  }
}
