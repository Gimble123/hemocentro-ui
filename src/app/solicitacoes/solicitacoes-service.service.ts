import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Solicitacao } from '../core/model';
import { AuthService } from '../seguranca/auth.service';

export class SolicitacaoFiltro {
  pagina: number = 0
  itensPorPagina: number = 3
}

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

  solicitacoesUrl =  environment.apiUrl + '/solicitacoes';
  jwtPayload: any;
  userId: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.auth.carregarToken();

    this.userId = this.auth.jwtPayload?.userId;
  }

    pesquisar(filtro: SolicitacaoFiltro): Promise<any> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      let params = new HttpParams()
        .set('page', filtro.pagina)
        .set('size', filtro.itensPorPagina);


        return this.http.get(`${this.solicitacoesUrl}`, { headers, params })
          .toPromise()
          .then((response: any) => {
            const solicitacoes = response['content'];

            const resultado = {
              solicitacoes,
              total: response['totalElements']
            };

            return resultado;
          });

    }


  excluir(id: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete<void>(`${this.solicitacoesUrl}/${id}`, { headers })
      .toPromise();
  }

  aprovarSolicitacao(id: number, status: String): Promise<void> {
      return this.http.put<void>(`${this.solicitacoesUrl}/${id}/aprovar`, status)
        .toPromise();
  }

  recusarSolicitacao(id: number, status: String): Promise<void> {
    return this.http.put<void>(`${this.solicitacoesUrl}/${id}/rejeitar`, status)
      .toPromise();
  }

  adicionar(solicitacao: Solicitacao): Promise<Solicitacao> {
    return this.http.post<Solicitacao>(this.solicitacoesUrl, solicitacao)
      .toPromise();
  }

  atualizar(solicitacao: Solicitacao): Promise<Solicitacao> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.put<Solicitacao>(`${this.solicitacoesUrl}/${solicitacao.solicitacaoId}`, solicitacao, { headers })
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaDatas([response]);

        return response;
      });
  }

  buscarPorCodigo(id: number): Promise<Solicitacao> {
    return this.http.get<Solicitacao>(`${this.solicitacoesUrl}/${id}`).toPromise();
  }

  private converterStringsParaDatas(solicitacoes: Solicitacao[]) {
    for (const solicitacao of solicitacoes) {
      let offset = new Date().getTimezoneOffset() * 60000;

      if (solicitacao.dataSolicitacao) {
        solicitacao.dataSolicitacao = new Date(new Date(solicitacao.dataSolicitacao!).getTime() + offset);
      }
    }
  }
}
