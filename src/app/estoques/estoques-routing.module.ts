import { EstoqueAtualizacaoComponent } from './estoque-atualizacao/estoque-atualizacao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';

const routes: Routes = [
  {
    path: 'estoques',
    component: EstoqueAtualizacaoComponent,
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
export class EstoquesRoutingModule { }
