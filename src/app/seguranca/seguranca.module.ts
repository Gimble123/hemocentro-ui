import { CoreModule } from './../core/core.module';
import { InputTextModule } from 'primeng/inputtext';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './form-login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeAdminComponent,
    ResetSenhaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CoreModule
  ]
})
export class SegurancaModule { }
