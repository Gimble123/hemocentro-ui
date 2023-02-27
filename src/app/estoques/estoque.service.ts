import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  estoquesUrl: string = '';

  constructor(private http: HttpClient) {
  }

}
