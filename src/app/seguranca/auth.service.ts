import { GrupoSanguineoService } from '../grupos-sanguineos/grupo-sanguineo.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario, UsuarioFormStep1, UsuarioFormStep2, UsuarioFormStep3 } from '../core/model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuariosUrl: string = '';

  tokensRevokeUrl = environment.apiUrl + '/tokens/revoke';
  oauthTokenUrl = environment.apiUrl + '/oauth/token';
  jwtPayload: any;
  grupoSanguineo: any[] = [];

  formCadastroStep1: UsuarioFormStep1 | undefined
  formCadastroStep2: UsuarioFormStep2 | undefined
  formCadastroStep3: UsuarioFormStep3 | undefined

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private grupoSanguineoService: GrupoSanguineoService
  ) {
    this.carregarToken();
    this.usuariosUrl = `${environment.apiUrl}/usuarios`
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

    const body = 'grant_type=refresh_token';

    return this.http.post<any>(this.oauthTokenUrl, body,
      { headers, withCredentials: true })
      .toPromise()
      .then((response: any) => {
        this.armazenarToken(response['access_token']);

        console.log('Novo access token criado!');

        return Promise.resolve();
      })
      .catch(response => {
        console.error('Erro ao renovar token.', response);
        return Promise.resolve();
      });
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

  adicionarStepFormCadastro(): Promise<Usuario> {
    if (!this.formCadastroStep1 || !this.formCadastroStep2 || !this.formCadastroStep3)
      return Promise.reject('Usuário incompleto')

    let usuario = new Usuario()
    Object.assign(usuario, this.formCadastroStep1, this.formCadastroStep2, this.formCadastroStep3)

      return this.http.post<Usuario>(`${this.usuariosUrl}/cadastro`, usuario)
      .toPromise()
      .then((usuario) => {
        this.apagarStepsForm()
        return usuario
      });

  }

  buscarPorCodigoFormCadastroSteps(codigo: number): Promise<Usuario> {
    return this.http.get(`${this.usuariosUrl}/${codigo}`)
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaDatas([response]);


        this.formCadastroStep1 = new UsuarioFormStep1()
        this.formCadastroStep2 = new UsuarioFormStep2()
        this.formCadastroStep3 = new UsuarioFormStep3();


        Object.assign(this.formCadastroStep1, response)
        Object.assign(this.formCadastroStep2, response)
        Object.assign(this.formCadastroStep3, response)

        return response;
      });
  }

  setFormStep1(stepForm1: UsuarioFormStep1) {
    this.formCadastroStep1 = stepForm1
  }

  setFormStep2(stepForm2: UsuarioFormStep2) {
    this.formCadastroStep2 = stepForm2
  }

  setFormStep3(stepForm3: UsuarioFormStep3) {
    this.formCadastroStep3 = stepForm3
  }

  getFormStep1() {
    return this.formCadastroStep1
  }

  getFormStep2() {
    return this.formCadastroStep2
  }

  getFormStep3() {
    return this.formCadastroStep3
  }

  apagarStepsForm() {
    this.formCadastroStep1 = undefined
    this.formCadastroStep2 = undefined
    this.formCadastroStep3 = undefined
  }

  private converterStringsParaDatas(usuarios: Usuario[]) {
    for (const usuario of usuarios) {
      let offset = new Date().getTimezoneOffset() * 60000;

      usuario.dataNascimento = new Date(new Date(usuario.dataNascimento!).getTime() + offset);

    }
  }

}
