import { ResetSenhaComponent } from './reset-senha/reset-senha.component';

import { HomeComponent } from './home/home.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component:  FormLoginComponent},
  { path: 'home', component:  HomeComponent},
  { path: 'reset-senha', component: ResetSenhaComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
