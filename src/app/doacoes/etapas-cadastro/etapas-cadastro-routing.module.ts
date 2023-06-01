import { DoacaoCadastroStep1Component } from './doacao-cadastro-step1/doacao-cadastro-step1.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "src/app/seguranca/auth.guard";
import { DoacaoContainerComponent } from './doacao-container/doacao-container.component';
import { DoacaoCadastroStep2Component } from './doacao-cadastro-step2/doacao-cadastro-step2.component';
import { DoacaoCadastroStep3Component } from './doacao-cadastro-step3/doacao-cadastro-step3.component';
import { DoacaoCadastroStep4Component } from './doacao-cadastro-step4/doacao-cadastro-step4.component';
import { DoacaoCadastroStep5Component } from './doacao-cadastro-step5/doacao-cadastro-step5.component';

const routes: Routes = [
  {
    path: 'doacao-container',
    component: DoacaoContainerComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] },
    children: [
      { path: '', redirectTo: 'doacao-cadastro-step1', pathMatch: 'full' },
      {
        path: 'doacao-cadastro-step1',
        component: DoacaoCadastroStep1Component,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] }
      },
      {
        path: 'doacao-cadastro-step1/:id',
        component: DoacaoCadastroStep1Component,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] }
      },
      {
        path: 'doacao-cadastro-step2',
        component: DoacaoCadastroStep2Component,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] }
      },
      {
        path: 'doacao-cadastro-step3',
        component: DoacaoCadastroStep3Component,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] }
      },
      {
        path: 'doacao-cadastro-step4',
        component: DoacaoCadastroStep4Component,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] }
      },
      {
        path: 'doacao-cadastro-step5',
        component: DoacaoCadastroStep5Component,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] }
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
