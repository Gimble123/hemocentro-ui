import { AuthService } from 'src/app/seguranca/auth.service';
import { Campanha } from './../core/model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

export class CampanhaFiltro {
  pagina: number = 0
  itensPorPagina: number = 3
}

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {

  campanhasUrl =  environment.apiUrl + '/campanhas';
  jwtPayload: any;
  userId: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.auth.carregarToken();

    this.userId = this.auth.jwtPayload?.userId;
  }

    pesquisar(filtro: CampanhaFiltro): Promise<any> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      let params = new HttpParams()
        .set('page', filtro.pagina)
        .set('size', filtro.itensPorPagina);

      if (this.auth.jwtPayload?.admin) {
        console.log('admin')
        return this.http.get(`${this.campanhasUrl}`, { headers, params })
          .toPromise()
          .then((response: any) => {
            const campanhas = response['content'];

            const resultado = {
              campanhas,
              total: response['totalElements']
            };

            console.log('Resultado: ' + response['content'])

            return resultado;
          });
      } else {
        console.log('user')
        return this.http.get(`${this.campanhasUrl}` + '/campanhasUsuario/' + this.userId, { headers, params })
        .toPromise()
        .then((response: any) => {
          const campanhas = response['content'];

          const resultado = {
            campanhas,
            total: response['totalElements']
          };

          console.log('Resultado: ' + resultado)

          return resultado;
        });
      }

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
