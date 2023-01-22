import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { ErrorHandlerService } from './error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthService } from './../seguranca/auth.service';

registerLocaleData(localePt, 'pt-BR');

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    ConfirmDialogModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    DatePipe,
    ErrorHandlerService,
    AuthService,

    MessageService,
    ConfirmationService,
    Title
  ]
})
export class CoreModule { }
