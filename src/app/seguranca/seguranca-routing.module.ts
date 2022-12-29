import { HomeUserComponent } from './home-user/home-user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component:  FormLoginComponent},
  { path: 'home-admin', component:  HomeAdminComponent},
  { path: 'home-user', component:  HomeUserComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
