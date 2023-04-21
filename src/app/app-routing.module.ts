import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';

import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { RelatorioComponent } from './relatorios/relatorio.component';
import { EstoquesPesquisaComponent } from './estoques/estoques-pesquisa/estoques-pesquisa.component';
import { EstoqueCadastroComponent } from './estoques/estoque-cadastro/estoque-cadastro.component';

const routes: Routes = [
  { path: 'cadastro', loadChildren: () => import('../app/seguranca/seguranca.module').then(m => m.SegurancaModule) },
  { path: 'usuarios',  loadChildren: () => import('../app/usuarios/usuarios.module').then(u => u.UsuariosModule) },
  { path: 'doacoes',  loadChildren: () => import('../app/doacoes/doacoes.module').then(d => d.DoacoesModule) },
  { path: 'relatorios', component: RelatorioComponent},
  { path: 'estoques', component: EstoquesPesquisaComponent},
  { path: 'estoques/novo', component: EstoqueCadastroComponent},
  { path: 'estoques/:id', component: EstoqueCadastroComponent},
  { path: 'login',  loadChildren: () => import('../app/seguranca/seguranca.module').then(s => s.SegurancaModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
