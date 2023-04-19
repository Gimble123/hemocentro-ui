import { Injectable } from '@angular/core';
import { Estoque } from '../core/model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../seguranca/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstoquesService {

  estoquesUrl =  environment.apiUrl + '/estoques';
  jwtPayload: any;
  userId: any;


  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.auth.carregarToken();

    this.userId = this.auth.jwtPayload?.userId;
  }


  atualizar(estoques: any[]): Promise<Estoque[]> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.put<Estoque>(`${this.estoquesUrl}/atualizar`, estoques, { headers })
    .toPromise()
    .then((response: any) => {
      return response;
    });
  }
}
