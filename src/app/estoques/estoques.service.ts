import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../seguranca/auth.service';
import { Estoque } from '../core/model';

export class EstoqueFiltro {
  pagina: number = 0
  itensPorPagina: number = 3
}

@Injectable({
  providedIn: 'root'
})
export class EstoquesService {

  estoquesUrl =  environment.apiUrl + '/estoques';
  jwtPayload: any;
  userId: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.auth.carregarToken();

    this.userId = this.auth.jwtPayload?.userId;
  }

  pesquisar(filtro: EstoqueFiltro): Promise<any> {
    console.log('Filtro ', filtro)
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    let params = new HttpParams()
      .set('page', filtro.pagina)
      .set('size', filtro.itensPorPagina);

      return this.http.get(`${this.estoquesUrl}`, { headers, params })
        .toPromise()
        .then((response: any) => {
          const estoques = response['content'];


          const resultado = {
            estoques,
            total: response['totalElements']
          };

          return resultado;
        });

  }


excluir(id: number): Promise<void> {
  const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

  return this.http.delete<void>(`${this.estoquesUrl}/${id}`, { headers })
    .toPromise();
}

adicionar(estoque: Estoque): Promise<Estoque> {
  let novoEstoque = {
    "id": null,
    "data": estoque.data,
    "status": {
        "id": estoque.status.id,
        "status": "teste"
    },
    "grupoSanguineo": {
        "id": estoque.grupoSanguineo.id,
        "nome": "B+"
    }
  }

  return this.http.post<Estoque>(this.estoquesUrl, novoEstoque)
    .toPromise();
}

atualizar(estoque: Estoque): Promise<Estoque> {
  const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
    .append('Content-Type', 'application/json');

  return this.http.put<Estoque>(`${this.estoquesUrl}/${estoque.id}`, estoque, { headers })
    .toPromise()
    .then((response: any) => {
      this.converterStringsParaDatas([response]);

      return response;
    });
}

buscarPorCodigo(id: number): Promise<Estoque> {
  return this.http.get<Estoque>(`${this.estoquesUrl}/${id}`).toPromise();
}

private converterStringsParaDatas(estoques: Estoque[]) {
  for (const estoque of estoques) {
    if (estoque.data) {
      estoque.data = new Date(new Date(estoque.data).getTime());
    }
  }
}
}
