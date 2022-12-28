import { GruposSanguineosPesquisaComponent } from './grupos-sanguineos-pesquisa/grupos-sanguineos-pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoSanguineoCadastroComponent } from './grupo-sanguineo-cadastro/grupo-sanguineo-cadastro.component';

const routes: Routes = [
    { path: 'grupos-sanguineos', component: GruposSanguineosPesquisaComponent },
    { path: 'grupos-sanguineos/novo', component: GrupoSanguineoCadastroComponent },
    { path: 'grupos-sanguineos/:codigo', component: GrupoSanguineoCadastroComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GruposSanguineosRoutingModule { }
