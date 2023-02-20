import { AuthGuard } from './../seguranca/auth.guard';

import { UsuariosPesquisaComponent } from './usuarios-pesquisa/usuarios-pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  }

  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
