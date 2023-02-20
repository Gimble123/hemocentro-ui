import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroContainerComponent } from "./form-cadastro-container/form-cadastro-container.component";
import { FormCadastroStep1Component } from "./form-cadastro-step1/form-cadastro-step1.component";
import { FormCadastroStep2Component } from "./form-cadastro-step2/form-cadastro-step2.component";
import { FormCadastroStep3Component } from "./form-cadastro-step3/form-cadastro-step3.component";


const routes: Routes = [
  {
    path: 'form-cadastro-container',
    component: FormCadastroContainerComponent,
    children: [
      { path: '', redirectTo: 'form-cadastro-step1', pathMatch: 'full' },
      {
        path: 'form-cadastro-step1',
        component: FormCadastroStep1Component
      },
      {
        path: 'form-cadastro-step2',
        component: FormCadastroStep2Component
      },
      {
        path: 'form-cadastro-step3',
        component: FormCadastroStep3Component
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EtapasFormCadastroRoutingModule { }
