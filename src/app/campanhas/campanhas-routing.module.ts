import { CampanhaCadastroComponent } from './campanha-cadastro/campanha-cadastro.component';
import { CampanhasPesquisaComponent } from './campanhas-pesquisa/campanhas-pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'campanhas', component: CampanhasPesquisaComponent },
    { path: 'campanhas/nova', component: CampanhaCadastroComponent },
    { path: 'campanhas/:codigo', component: CampanhaCadastroComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CampanhasRoutingModule { }
