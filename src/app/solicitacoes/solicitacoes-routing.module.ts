import { SolicitacoesPesquisaComponent } from './solicitacoes-pesquisa/solicitacoes-pesquisa.component';
import { AuthGuard } from '../seguranca/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'solicitacoes',
    component: SolicitacoesPesquisaComponent,
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
export class SolicitacoesRoutingModule { }
