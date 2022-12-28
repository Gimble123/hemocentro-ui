import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campanha, GrupoSanguineo } from '../core/model';

export class GrupoSanguineoFiltro {
  pagina: number = 0
  itensPorPagina: number = 5
}

@Injectable({
  providedIn: 'root'
})
export class GrupoSanguineoService {

  gruposSanguineosUrl = 'http://localhost:8081/grupos-sanguineo';

  constructor(private http: HttpClient) { }

    listarTodas(): Promise<any> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      return this.http.get(this. gruposSanguineosUrl, { headers })
        .toPromise()
        .then((response: any) => {

          //console.log('cscsdfsdsdfsf: ',response)
          return response
        });
    }

    buscarPorId(id: number): Promise<GrupoSanguineo> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      return this.http.get<GrupoSanguineo>(`${this.gruposSanguineosUrl}/${id}`, { headers })
        .toPromise();
    }

}
