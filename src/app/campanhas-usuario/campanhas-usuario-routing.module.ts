import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { CampanhasUsuarioPesquisaComponent } from './campanhas-usuario-pesquisa/campanhas-usuario-pesquisa.component';

const routes: Routes = [
    {
      path: 'campanhas/usuario',
      component: CampanhasUsuarioPesquisaComponent,
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
export class CampanhasUsuarioRoutingModule { }
