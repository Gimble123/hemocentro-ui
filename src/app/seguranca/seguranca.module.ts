import { FormLoginComponent } from './form-login/form-login.component';
import { CoreModule } from './../core/core.module';
import { InputTextModule } from 'primeng/inputtext';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { MoneyHttpInterceptor } from './money-http-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StepsModule } from 'primeng/steps';
import { FormCadastroContainerComponent } from './form-etapas-cadastro/form-cadastro-container/form-cadastro-container.component';
import { EtapasFormModule } from './form-etapas-cadastro/etapas-form.module';

export function tokenGetter(): string {
  return localStorage.getItem('token')!;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: environment.tokenAllowedDomains,
        disallowedRoutes: environment.tokenDisallowedRoutes
      }
    }),
    InputTextModule,
    CoreModule,
    SegurancaRoutingModule,
    StepsModule,
    EtapasFormModule
  ],
  declarations: [
    FormLoginComponent,
    HomeComponent,
    ResetSenhaComponent,

    FormCadastroContainerComponent
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MoneyHttpInterceptor,
      multi: true
    }
  ]
})
export class SegurancaModule { }
