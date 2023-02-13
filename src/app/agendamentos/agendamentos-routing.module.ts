import { AgendamentosPesquisaComponent } from './agendamentos-pesquisa/agendamentos-pesquisa.component';
import { AuthGuard } from '../seguranca/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'agendamentos',
    component: AgendamentosPesquisaComponent,
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
export class AgendamentosRoutingModule { }
