import { DoacoesUsuarioPesquisaComponent } from './doacoes-usuario-pesquisa/doacoes-usuario-pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';

const routes: Routes = [
  {
    path: 'doacoes-usuario',
    component: DoacoesUsuarioPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_USER'] }
  }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DoacoesUsuarioRoutingModule { }
