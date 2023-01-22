import { Campanha } from './../core/model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class CampanhaFiltro {
  pagina: number = 0
  itensPorPagina: number = 3
}

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {

  campanhasUrl = 'http://localhost:8081/campanhas';

  constructor(private http: HttpClient) { }

    pesquisar(filtro: CampanhaFiltro): Promise<any> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      let params = new HttpParams()
        .set('page', filtro.pagina)
        .set('size', filtro.itensPorPagina);


      return this.http.get(`${this.campanhasUrl}`, { headers, params })
        .toPromise()
        .then((response: any) => {
          const campanhas = response;

          const resultado = {
            campanhas,
            total: response['totalElements']
          };

          console.log('Campanhas: ', campanhas);
          return resultado;
        });
    }

  excluir(id: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete<void>(`${this.campanhasUrl}/${id}`, { headers })
      .toPromise();
  }

  adicionar(campanha: Campanha): Promise<Campanha> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.post<Campanha>(this.campanhasUrl, campanha, { headers })
      .toPromise();
  }

  atualizar(campanha: Campanha): Promise<Campanha> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.put<Campanha>(`${this.campanhasUrl}/${campanha.id}`, campanha, { headers })
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaDatas([response]);

        return response;
      });
  }

  buscarPorCodigo(id: number): Promise<Campanha> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(`${this.campanhasUrl}/${id}`, { headers })
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaDatas([response]);

        return response;
      });
  }

  private converterStringsParaDatas(campanhas: Campanha[]) {
    for (const campanha of campanhas) {
      let offset = new Date().getTimezoneOffset() * 60000;

      if (campanha.dataInicial) {
        campanha.dataInicial = new Date(new Date(campanha.dataInicial!).getTime() + offset);
      }

      if (campanha.dataFinal) {
        campanha.dataFinal = new Date(new Date(campanha.dataFinal).getTime() + offset);
      }
    }
  }

}
