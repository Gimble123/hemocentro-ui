import { AgendamentoInput } from './../core/model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Agendamento } from '../core/model';
import { AuthService } from '../seguranca/auth.service';

export class AgendamentoFiltro {
  pagina: number = 0
  itensPorPagina: number = 3
}

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  agendamentosUrl =  environment.apiUrl + '/agendamentos';
  jwtPayload: any;
  userId: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.auth.carregarToken();

    this.userId = this.auth.jwtPayload?.userId;
  }

    pesquisar(filtro: AgendamentoFiltro): Promise<any> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      let params = new HttpParams()
        .set('page', filtro.pagina)
        .set('size', filtro.itensPorPagina);


        return this.http.get(`${this.agendamentosUrl}/agendamentosUsuario/${this.userId}`, { headers, params })
          .toPromise()
          .then((response: any) => {
            const agendamentos = response['content'];

            const resultado = {
              agendamentos,
              total: response['totalElements']
            };

            return resultado;
          });

    }


  excluir(id: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete<void>(`${this.agendamentosUrl}/${id}`, { headers })
      .toPromise();
  }

  adicionar(agendamento: AgendamentoInput): Promise<AgendamentoInput> {
    console.log('AgendamentoService: ', agendamento)
    return this.http.post<AgendamentoInput>(this.agendamentosUrl, agendamento)
      .toPromise();
  }

  atualizar(agendamento: Agendamento): Promise<Agendamento> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.put<Agendamento>(`${this.agendamentosUrl}/${agendamento.agendamentoId}`, agendamento, { headers })
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaDatas([response]);

        return response;
      });
  }

  buscarPorCodigo(id: number): Promise<Agendamento> {
    return this.http.get<Agendamento>(`${this.agendamentosUrl}/${id}`).toPromise();
  }

  private converterStringsParaDatas(agendamentos: Agendamento[]) {
    for (const agendamento of agendamentos) {
      let offset = new Date().getTimezoneOffset() * 60000;

      if (agendamento.dataAgendamento) {
        agendamento.dataAgendamento = new Date(new Date(agendamento.dataAgendamento!).getTime() + offset);
      }
    }
  }
}
