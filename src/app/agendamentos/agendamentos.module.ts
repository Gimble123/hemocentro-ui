import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { AgendamentosPesquisaComponent } from './agendamentos-pesquisa/agendamentos-pesquisa.component';
import { AgendamentoGridComponent } from './agendamento-grid/agendamento-grid.component';
import { AgendamentoAtualizacaoComponent } from './agendamento-atualizacao/agendamento-atualizacao.component';
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
    AgendamentosPesquisaComponent,
    AgendamentoGridComponent,
    AgendamentoAtualizacaoComponent
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
    CoreModule
  ],
  exports: [
    AgendamentosPesquisaComponent
  ]
})
export class AgendamentosModule { }
