import { AuthGuard } from '../seguranca/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoquesPesquisaComponent } from './estoques-pesquisa/estoques-pesquisa.component';
import { EstoqueCadastroComponent } from './estoque-cadastro/estoque-cadastro.component';

const routes: Routes = [
  {
    path: 'estoques',
    component: EstoquesPesquisaComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_ADMIN'] }
  },
  {
    path: 'estoques/novo',
    component: EstoqueCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
  {
    path: 'estoques/:id',
    component: EstoqueCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoquesRoutingModule { }
