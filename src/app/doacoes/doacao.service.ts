import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doacao } from '../core/model';

export class DoacaoFiltro {
  pagina: number = 0
  itensPorPagina: number = 5
}

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  doacoesUrl = 'http://localhost:8081/doacoes';

  constructor(private http: HttpClient,
    private datePipe: DatePipe) { }

    pesquisar(filtro: DoacaoFiltro): Promise<any> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      let params = new HttpParams()
        .set('page', filtro.pagina)
        .set('size', filtro.itensPorPagina);


      return this.http.get(`${this.doacoesUrl}`, { headers, params })
        .toPromise()
        .then((response: any) => {
          const doacoes = response;

          const resultado = {
            doacoes,
            total: response['totalElements']
          };

          return resultado;
        });
    }

  excluir(id: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete<void>(`${this.doacoesUrl}/${id}`, { headers })
      .toPromise();
  }

  adicionar(doacao: Doacao): Promise<Doacao> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.post<Doacao>(this.doacoesUrl, doacao, { headers })
      .toPromise();
  }

}
