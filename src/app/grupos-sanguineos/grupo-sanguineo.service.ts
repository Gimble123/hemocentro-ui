import { GrupoSanguineo } from '../core/model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export class GruposSanguineosFiltro {
  pagina: number = 0
  itensPorPagina: number = 3
}

@Injectable({
  providedIn: 'root'
})
export class GrupoSanguineoService {

  gruposSanguineosUrl: string = '';

  constructor(private http: HttpClient) {
    this.gruposSanguineosUrl = `${environment.apiUrl}/grupos-sanguineo`
  }

  pesquisar(filtro: GruposSanguineosFiltro): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    let params = new HttpParams()
      .set('page', filtro.pagina)
      .set('size', filtro.itensPorPagina);


    return this.http.get(`${this.gruposSanguineosUrl}`, { headers, params })
      .toPromise()
      .then((response: any) => {
        const grupos = response['content'];

        const resultado = {
          grupos,
          total: response['totalElements']
        };

        return resultado;
      });
  }

  listarTodosSemPaginacao(): Promise<any> {
    return this.http.get(this.gruposSanguineosUrl + '/all').toPromise();
  }

  adicionar(grupo: GrupoSanguineo): Promise<GrupoSanguineo> {
    return this.http.post<GrupoSanguineo>(this.gruposSanguineosUrl, grupo)
      .toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.gruposSanguineosUrl}/${codigo}`)
      .toPromise();
  }

  atualizar(grupo: GrupoSanguineo): Promise<GrupoSanguineo> {
    return this.http.put<GrupoSanguineo>(`${this.gruposSanguineosUrl}/${grupo.id}`, grupo).toPromise();
  }

    listarTodas(): Promise<any> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      return this.http.get(this.gruposSanguineosUrl, { headers })
        .toPromise()
        .then((response: any) => {

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
