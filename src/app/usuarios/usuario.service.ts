import { environment } from './../../environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario, UsuarioCadastroEtapa1, UsuarioCadastroEtapa2, UsuarioCadastroEtapa3 } from '../core/model';

export class UsuarioFiltro {
  pagina: number = 0
  itensPorPagina: number = 3
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuariosUrl: string = '';

  usuarioCadastroEtapa1: UsuarioCadastroEtapa1 | undefined
  usuarioCadastroEtapa2: UsuarioCadastroEtapa2 | undefined
  usuarioCadastroEtapa3: UsuarioCadastroEtapa3 | undefined

  constructor(
    private http: HttpClient
  ) {
    this.usuariosUrl = `${environment.apiUrl}/usuarios`
  }

  pesquisar(filtro: UsuarioFiltro): Promise<any> {
    let params = new HttpParams()
      .set('page', filtro.pagina)
      .set('size', filtro.itensPorPagina);

    return this.http.get(`${this.usuariosUrl}`, { params })
      .toPromise()
      .then((response: any) => {
        const usuarios = response['content'];

        const resultado = {
          usuarios,
          total: response['totalElements']
        };

        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.usuariosUrl}/${codigo}`)
      .toPromise();
  }

  adicionar(usuario: Usuario): Promise<Usuario> {
    return this.http.post<Usuario>(this.usuariosUrl, usuario).toPromise();
  }

  adicionarStep(): Promise<Usuario> {
    if (!this.usuarioCadastroEtapa1 || !this.usuarioCadastroEtapa2 || !this.usuarioCadastroEtapa3)
      return Promise.reject('Usuário incompleto')

    let usuario = new Usuario()
    Object.assign(usuario, this.usuarioCadastroEtapa1, this.usuarioCadastroEtapa2, this.usuarioCadastroEtapa3)

    return this.http.post<Usuario>(this.usuariosUrl, usuario)
      .toPromise()
      .then((usuario) => {
        this.apagarSteps()
        return usuario
      });
  }

  atualizar(usuario: Usuario): Promise<Usuario> {
    return this.http.put<Usuario>(`${this.usuariosUrl}/${usuario.id}`, usuario)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Usuario> {
    return this.http.get(`${this.usuariosUrl}/${codigo}`)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  buscarPorCodigoSteps(codigo: number): Promise<Usuario> {
    return this.http.get(`${this.usuariosUrl}/${codigo}`)
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaDatas([response]);


        this.usuarioCadastroEtapa1 = new UsuarioCadastroEtapa1()
        this.usuarioCadastroEtapa2 = new UsuarioCadastroEtapa2()
        this.usuarioCadastroEtapa3 = new UsuarioCadastroEtapa3();


        Object.assign(this.usuarioCadastroEtapa1, response)
        Object.assign(this.usuarioCadastroEtapa2, response)
        Object.assign(this.usuarioCadastroEtapa3, response)

        return response;
      });
  }

  setStep2(step2: UsuarioCadastroEtapa2) {
    this.usuarioCadastroEtapa2 = step2
  }

  setStep1(step1: UsuarioCadastroEtapa1) {
    this.usuarioCadastroEtapa1 = step1
  }

  setStep3(step3: UsuarioCadastroEtapa3) {
    this.usuarioCadastroEtapa3 = step3
  }

  getStep1() {
    return this.usuarioCadastroEtapa1
  }

  getStep2() {
    return this.usuarioCadastroEtapa2
  }

  getStep3() {
    return this.usuarioCadastroEtapa3
  }

  apagarSteps() {
    this.usuarioCadastroEtapa1 = undefined
    this.usuarioCadastroEtapa2 = undefined
    this.usuarioCadastroEtapa3 = undefined
  }

  private converterStringsParaDatas(usuarios: Usuario[]) {
    for (const usuario of usuarios) {
      let offset = new Date().getTimezoneOffset() * 60000;

      usuario.dataNascimento = new Date(new Date(usuario.dataNascimento!).getTime() + offset);

    }
  }
}
