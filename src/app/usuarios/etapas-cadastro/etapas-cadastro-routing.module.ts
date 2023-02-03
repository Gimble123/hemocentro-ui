import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "src/app/seguranca/auth.guard";
import { UsuarioCadastroStep1Component } from "./usuario-cadastro-step1/usuario-cadastro-step1.component";
import { UsuarioCadastroStep2Component } from "./usuario-cadastro-step2/usuario-cadastro-step2.component";
import { UsuarioContainerComponent } from "./usuario-container/usuario-container.component";
import { UsuarioCadastroStep3Component } from './usuario-cadastro-step3/usuario-cadastro-step3.component';

const routes: Routes = [
  {
    path: 'usuario-container',
    component: UsuarioContainerComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] },
    children: [
      { path: '', redirectTo: 'usuario-cadastro-step1', pathMatch: 'full' },
      {
        path: 'usuario-cadastro-step1',
        component: UsuarioCadastroStep1Component,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] }
      },
      {
        path: 'usuario-cadastro-step1/:id',
        component: UsuarioCadastroStep1Component,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] }
      },
      {
        path: 'usuario-cadastro-step2',
        component: UsuarioCadastroStep2Component,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] }
      },
      {
        path: 'usuario-cadastro-step3',
        component: UsuarioCadastroStep3Component,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] }
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EtapasCadastroRoutingModule { }
