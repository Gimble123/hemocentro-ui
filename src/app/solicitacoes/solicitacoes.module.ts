import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacaoCadastroComponent } from './solicitacao-cadastro/solicitacao-cadastro.component';
import { SolicitacaoAtualizacaoComponent } from './solicitacao-atualizacao/solicitacao-atualizacao.component';
import { SolicitacaoGridComponent } from './solicitacao-grid/solicitacao-grid.component';
import { SolicitacoesPesquisaComponent } from './solicitacoes-pesquisa/solicitacoes-pesquisa.component';



@NgModule({
  declarations: [
    SolicitacaoCadastroComponent,
    SolicitacaoAtualizacaoComponent,
    SolicitacaoGridComponent,
    SolicitacoesPesquisaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SolicitacoesModule { }
