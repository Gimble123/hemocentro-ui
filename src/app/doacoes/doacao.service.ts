import { DoacaoCadastroEtapa1, DoacaoCadastroEtapa2, DoacaoCadastroEtapa3, DoacaoCadastroEtapa4 } from './../core/model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doacao } from '../core/model';
import { environment } from 'src/environments/environment';

export class DoacaoFiltro {
  pagina: number = 0
  itensPorPagina: number = 3
}

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  doacoesUrl: string = '';

  doacaoCadastroEtapa1: DoacaoCadastroEtapa1 | undefined
  doacaoCadastroEtapa2: DoacaoCadastroEtapa2 | undefined
  doacaoCadastroEtapa3: DoacaoCadastroEtapa3 | undefined

  constructor(private http: HttpClient) {
    this.doacoesUrl = `${environment.apiUrl}/doacoes`
  }

    pesquisar(filtro: DoacaoFiltro): Promise<any> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      let params = new HttpParams()
        .set('page', filtro.pagina)
        .set('size', filtro.itensPorPagina);


      return this.http.get(`${this.doacoesUrl}`, { headers, params })
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

  adicionarStep(): Promise<Doacao> {
    if (!this.doacaoCadastroEtapa1 || !this.doacaoCadastroEtapa2 || !this.doacaoCadastroEtapa3)
      return Promise.reject('Doação incompleta')

    let doacao = new Doacao()
    Object.assign(doacao, this.doacaoCadastroEtapa1, this.doacaoCadastroEtapa2, this.doacaoCadastroEtapa3)

      return this.http.post<Doacao>(`${this.doacoesUrl}`, doacao)
      .toPromise()
      .then((doacao) => {
        this.apagarSteps()
        return doacao
      });
  }

  buscarPorCodigoSteps(codigo: number): Promise<Doacao> {
    return this.http.get(`${this.doacoesUrl}/${codigo}`)
      .toPromise()
      .then((response: any) => {

        this.doacaoCadastroEtapa1 = new DoacaoCadastroEtapa1()
        this.doacaoCadastroEtapa2 = new DoacaoCadastroEtapa2()
        this.doacaoCadastroEtapa3 = new DoacaoCadastroEtapa3();

        Object.assign(this.doacaoCadastroEtapa1, response)
        Object.assign(this.doacaoCadastroEtapa2, response)
        Object.assign(this.doacaoCadastroEtapa3, response)

        return response;
      });
  }

  setStep2(step2: DoacaoCadastroEtapa2) {
    this.doacaoCadastroEtapa2 = step2
  }

  setStep1(step1: DoacaoCadastroEtapa1) {
    this.doacaoCadastroEtapa1 = step1
  }

  setStep3(step3: DoacaoCadastroEtapa3) {
    this.doacaoCadastroEtapa3 = step3
  }

  getStep1() {
    return this.doacaoCadastroEtapa1
  }

  getStep2() {
    return this.doacaoCadastroEtapa2
  }

  getStep3() {
    return this.doacaoCadastroEtapa3
  }

  apagarSteps() {
    this.doacaoCadastroEtapa1 = undefined
    this.doacaoCadastroEtapa2 = undefined
    this.doacaoCadastroEtapa3 = undefined
  }

}
