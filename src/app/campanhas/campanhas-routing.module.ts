import { CampanhaCadastroComponent } from './campanha-cadastro/campanha-cadastro.component';
import { CampanhasPesquisaComponent } from './campanhas-pesquisa/campanhas-pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { CampanhasUsuarioPesquisaComponent } from '../campanhas-usuario/campanhas-usuario-pesquisa/campanhas-usuario-pesquisa.component';

const routes: Routes = [
    {
      path: 'campanhas',
      component: CampanhasPesquisaComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_ADMIN'] }
    },
    {
      path: 'campanhas/nova',
      component: CampanhaCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_ADMIN'] }
     },
    {
      path: 'campanhas/:id',
      component: CampanhaCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_ADMIN'] }
    },

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
export class CampanhasRoutingModule { }
