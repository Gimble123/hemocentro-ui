import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {

  doacoesUrl: string = '';

  constructor( private http: HttpClient,
    private datePipe: DatePipe) {
      this.doacoesUrl = `${environment.apiUrl}/doacoes`
  }

  relatorioDoacoesMensais(inicio: Date, fim: Date) {
    const params = new HttpParams()
      .set('inicio', this.datePipe.transform(inicio, 'yyyy-MM-dd')!)
      .set('fim', this.datePipe.transform(fim, 'yyyy-MM-dd')!);

    return this.http.get(`${this.doacoesUrl}/relatorios/doacoes-mensais`,
      { params, responseType: 'blob' })
      .toPromise();
  }
}
