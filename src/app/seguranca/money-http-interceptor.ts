import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { AuthService } from './auth.service';

export class NotAuthenticatedError { }

@Injectable()
export class MoneyHttpInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('/oauth/token') && !req.url.includes('/forgot-password') && !req.url.includes('/grupos-sanguineo/all') && !req.url.includes('/usuarios/cadastro') && !req.url.includes('/form-cadastro-step1') && !req.url.includes('/form-cadastro-step2') && !req.url.includes('/form-cadastro-step3') && this.auth.isAccessTokenInvalido()) {
      return from(this.auth.obterNovoAccessToken())
        .pipe(
          mergeMap(() => {
            if (this.auth.isAccessTokenInvalido()) {
              throw new NotAuthenticatedError();
            }

            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            });

            return next.handle(req);
          }),
          catchError(error => {
            if (this.auth.isAccessTokenInvalido()) {
              console.error('Usuário não autenticado')
              throw new NotAuthenticatedError();
            }

            return next.handle(req);
          })
        );
    }

    return next.handle(req);
  }
}

