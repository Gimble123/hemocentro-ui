import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { AgendamentosPesquisaComponent } from './agendamentos-pesquisa/agendamentos-pesquisa.component';
import { AgendamentoGridComponent } from './agendamento-grid/agendamento-grid.component';
import { AgendamentoAtualizacaoComponent } from './agendamento-atualizacao/agendamento-atualizacao.component';



@NgModule({
  declarations: [
    AgendamentoCadastroComponent,
    AgendamentosPesquisaComponent,
    AgendamentoGridComponent,
    AgendamentoAtualizacaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgendamentosModule { }
