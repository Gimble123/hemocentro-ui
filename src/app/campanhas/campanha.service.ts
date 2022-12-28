import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campanha } from '../core/model';

export class CampanhaFiltro {
  pagina: number = 0
  itensPorPagina: number = 5
}

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {

  campanhasUrl = 'http://localhost:8081/campanhas';

  constructor(private http: HttpClient,
    private datePipe: DatePipe) { }

    pesquisar(filtro: CampanhaFiltro): Promise<any> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      let params = new HttpParams()
        .set('page', filtro.pagina)
        .set('size', filtro.itensPorPagina);


      return this.http.get(`${this.campanhasUrl}`, { headers, params })
        .toPromise()
        .then((response: any) => {
          const campanhas = response['content'];

          const resultado = {
            campanhas,
            total: response['totalElements']
          };

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

  // atualizar(lancamento: Lancamento): Promise<Lancamento> {
  //   const headers = new HttpHeaders()
  //     .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
  //     .append('Content-Type', 'application/json');

  //   return this.http.put<Lancamento>(`${this.lancamentosUrl}/${lancamento.codigo}`, lancamento, { headers })
  //     .toPromise()
  //     .then((response: any) => {
  //       this.converterStringsParaDatas([response]);

  //       return response;
  //     });
  // }

  // buscarPorCodigo(codigo: number): Promise<Lancamento> {
  //   const headers = new HttpHeaders()
  //     .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

  //   return this.http.get(`${this.lancamentosUrl}/${codigo}`, { headers })
  //     .toPromise()
  //     .then((response: any) => {
  //       this.converterStringsParaDatas([response]);

  //       return response;
  //     });
  // }

  // private converterStringsParaDatas(lancamentos: Lancamento[]) {
  //   for (const lancamento of lancamentos) {
  //     let offset = new Date().getTimezoneOffset() * 60000;

  //     lancamento.dataVencimento = new Date(new Date(lancamento.dataVencimento!).getTime() + offset);

  //     if (lancamento.dataPagamento) {
  //       lancamento.dataPagamento = new Date(new Date(lancamento.dataPagamento).getTime() + offset);
  //     }
  //   }
  // }

}
