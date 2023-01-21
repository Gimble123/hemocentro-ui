import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCadastroStep1Component } from "./usuario-cadastro-step1/usuario-cadastro-step1.component";
import { UsuarioCadastroStep2Component } from "./usuario-cadastro-step2/usuario-cadastro-step2.component";
import { UsuarioContainerComponent } from "./usuario-container/usuario-container.component";

const routes: Routes = [
  {
    path: 'usuario-container',
    component: UsuarioContainerComponent,
    children: [
      { path: '', redirectTo: 'usuario-cadastro-step1', pathMatch: 'full' },
      {
        path: 'usuario-cadastro-step1',
        component: UsuarioCadastroStep1Component
      },
      {
        path: 'usuario-cadastro-step2',
        component: UsuarioCadastroStep2Component
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EtapasCadastroRoutingModule { }
