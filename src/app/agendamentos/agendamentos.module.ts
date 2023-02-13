import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { AgendamentosPesquisaComponent } from './agendamentos-pesquisa/agendamentos-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputMaskModule } from 'primeng/inputmask';
import { SharedModule } from 'primeng/api';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    AgendamentoCadastroComponent,
    AgendamentosPesquisaComponent
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
    AgendamentosRoutingModule
  ],
  exports: [
    AgendamentosPesquisaComponent
  ]
})
export class AgendamentosModule { }
