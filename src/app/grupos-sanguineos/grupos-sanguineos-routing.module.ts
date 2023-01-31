import { GruposSanguineosPesquisaComponent } from './grupos-sanguineos-pesquisa/grupos-sanguineos-pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoSanguineoCadastroComponent } from './grupo-sanguineo-cadastro/grupo-sanguineo-cadastro.component';
import { AuthGuard } from '../seguranca/auth.guard';

const routes: Routes = [
  {
    path: 'grupos-sanguineos',
    component: GruposSanguineosPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
  {
    path: 'grupos-sanguineos/novo',
    component: GrupoSanguineoCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
  {
    path: 'grupos-sanguineos/:id',
    component: GrupoSanguineoCadastroComponent,
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
export class GruposSanguineosRoutingModule { }
