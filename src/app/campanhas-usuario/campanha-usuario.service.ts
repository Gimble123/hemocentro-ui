import { AuthService } from 'src/app/seguranca/auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export class CampanhaFiltro {
  pagina: number = 0
  itensPorPagina: number = 3
}

@Injectable({
  providedIn: 'root'
})
export class CampanhaUsuarioService {

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

  pesquisarCampanhasUsuario(filtro: CampanhaFiltro): Promise<any> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

  let params = new HttpParams()
    .set('page', filtro.pagina)
    .set('size', filtro.itensPorPagina);

    return this.http.get(`${this.campanhasUrl}` + '/campanhasUsuario/' + this.userId, { headers, params })
    .toPromise()
    .then((response: any) => {
      const campanhas = response['content'];

      const resultado = {
        campanhas,
        total: response['totalElements']
      };

      console.log('Resultado: ', resultado.campanhas)

      return resultado;
    });
  }

}
