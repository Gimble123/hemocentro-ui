import { Estoque } from './../core/model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  estoquesUrl: string = '';

  constructor(private http: HttpClient) {
    this.estoquesUrl = `${environment.apiUrl}/estoques`
  }

  listarStatus(): Promise<any> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(this.estoquesUrl + '/status', { headers }).toPromise();
  }

  carregarStatus(): Promise<any> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(this.estoquesUrl, { headers }).toPromise();
  }

  atualizar(estoques: Estoque[]): Promise<Estoque[]> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.put<Estoque[]>(`${this.estoquesUrl}`, estoques, { headers })
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

}
