import { SolicitacoesRoutingModule } from './solicitacoes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacoesPesquisaComponent } from './solicitacoes-pesquisa/solicitacoes-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { TooltipModule } from 'primeng/tooltip';
import { SharedModule } from 'primeng/api';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    SolicitacoesPesquisaComponent
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

    SolicitacoesRoutingModule
  ]
})
export class SolicitacoesModule { }
