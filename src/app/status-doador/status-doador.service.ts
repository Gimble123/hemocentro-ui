import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusDoadorService {

  statusUrl: string = ''

  constructor(
    private http: HttpClient
    ) {
    this.statusUrl = `${environment.apiUrl}/status-doador`;
  }

  listarTodos(): Promise<any> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(this.statusUrl, { headers }).toPromise();
  }
}
