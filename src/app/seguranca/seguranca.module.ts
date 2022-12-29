import { HomeUserComponent } from './home-user/home-user.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { CoreModule } from './../core/core.module';
import { InputTextModule } from 'primeng/inputtext';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { MoneyHttpInterceptor } from './money.http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export function tokenGetter(): string {
  return localStorage.getItem('token')!;
}

@NgModule({
  declarations: [
    FormLoginComponent,
    HomeAdminComponent,
    HomeUserComponent,
    ResetSenhaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8081'],
        disallowedRoutes: ['http://localhost:8081/oauth/token']
      }
    }),
    InputTextModule,
    CoreModule,
    SegurancaRoutingModule
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
