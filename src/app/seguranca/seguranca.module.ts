import { FormLoginComponent } from './form-login/form-login.component';
import { CoreModule } from './../core/core.module';
import { InputTextModule } from 'primeng/inputtext';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ResetSenhaComponent } from './reset-senha/reset-senha.component';



@NgModule({
  declarations: [
    FormLoginComponent,
    HomeAdminComponent,
    ResetSenhaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CoreModule
  ],
  exports: [
    FormLoginComponent,
    HomeAdminComponent,
    ResetSenhaComponent
  ]
})
export class SegurancaModule { }
