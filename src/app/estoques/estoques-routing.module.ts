import { AuthGuard } from '../seguranca/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoquesAtualizacaoComponent } from './estoques-atualizacao/estoques-atualizacao.component';

const routes: Routes = [
  {
    path: 'estoques',
    component: EstoquesAtualizacaoComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_ADMIN'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoquesAtualizacaoRoutingModule { }
