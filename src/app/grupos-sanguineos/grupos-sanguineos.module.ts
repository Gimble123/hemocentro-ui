import { GruposSanguineosRoutingModule } from './grupos-sanguineos-routing.module';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { GrupoSanguineoCadastroComponent } from './grupo-sanguineo-cadastro/grupo-sanguineo-cadastro.component';
import { SharedModule } from './../shared/shared.module';
import { GruposSanguineosPesquisaComponent } from './grupos-sanguineos-pesquisa/grupos-sanguineos-pesquisa.component';



@NgModule({
  declarations: [
    GrupoSanguineoCadastroComponent,
    GruposSanguineosPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    SharedModule,
    CoreModule,
    GruposSanguineosRoutingModule

  ],
  exports: [
    GrupoSanguineoCadastroComponent
  ]
})
export class GruposSanguineosModule { }
