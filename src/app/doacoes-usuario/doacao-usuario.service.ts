import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../seguranca/auth.service';

export class DoacaoFiltro {
  pagina: number = 0
  itensPorPagina: number = 3
}

@Injectable({
  providedIn: 'root'
})
export class DoacaoUsuarioService {

  doacoesUrl: string = '';
  jwtPayload: any;
  userId: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.auth.carregarToken();

    this.userId = this.auth.jwtPayload?.userId;

    this.doacoesUrl = `${environment.apiUrl}/doacoes`
  }

    pesquisar(filtro: DoacaoFiltro): Promise<any> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      let params = new HttpParams()
        .set('page', filtro.pagina)
        .set('size', filtro.itensPorPagina);


      return this.http.get(`${this.doacoesUrl}/doacoesUsuario/` + this.userId, { headers, params })
        .toPromise()
        .then((response: any) => {
          const doacoes = response['content'];

          const resultado = {
            doacoes,
            total: response['totalElements']
          };

          return resultado;
        });
    }
}
