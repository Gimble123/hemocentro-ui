import { GrupoSanguineoService } from './../grupos-sanguineos/grupo_sanguineo.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokensRevokeUrl = environment.apiUrl + '/tokens/revoke';
  oauthTokenUrl = environment.apiUrl + '/oauth/token';
  jwtPayload: any;
  grupoSanguineo: any[] = [];

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private grupoSanguineoService: GrupoSanguineoService
  ) {
  }

  carregarGruposSanguineos() {
    this.grupoSanguineoService.listarTodosSemPaginacao();
  }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then((response: any) => {
        this.armazenarToken(response['access_token']);
      })
      .catch(response => {
        if (response.status === 400) {
          if (response.error.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!');
          }
        }

        return Promise.reject(response);
      });
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const payload = new HttpParams()
      .append('grant_type', 'refresh_token')
      .append('refresh_token', localStorage.getItem('refreshToken')!)

    return this.http.post<any>(this.oauthTokenUrl, payload,
      { headers })
      .toPromise()
      .then((response: any) => {
        this.armazenarToken(response['access_token']);
        this.armazenarRefreshToken(response['refresh_token'])
        console.log('Novo access token criado!');

        return Promise.resolve();
      })
      .catch((response: any) => {
        console.error('Erro ao renovar token.', response);
        return Promise.resolve();
      });
  }

  private armazenarRefreshToken(refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  temPermissao() {
    return this.jwtPayload && this.jwtPayload.admin;
  }

  temPermissaoRole(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles: any) {
    for (const role of roles) {
      if (this.temPermissaoRole(role)) {
        return true;
      }
    }

    return false;
  }

  public armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);

    localStorage.setItem('token', token);
  }

  public carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.limparAccessToken();
        localStorage.clear();
      });
  }

  recuperar(email: String) {
    const url = `${environment.apiUrl}/usuarios/forgot-password`;
    this.http.put<any>(url, { email })
      .toPromise()
      .then((response: any) => {
        return Promise.resolve(response);
      });
  }

}
