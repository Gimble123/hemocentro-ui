import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoacaoCadastroComponent } from './doacao-cadastro/doacao-cadastro.component';
import { DoacaoGridComponent } from './doacao-grid/doacao-grid.component';
import { DoacaoAtualizacaoComponent } from './doacao-atualizacao/doacao-atualizacao.component';
import { DoacoesPesquisaComponent } from './doacoes-pesquisa/doacoes-pesquisa.component';



@NgModule({
  declarations: [
    DoacaoCadastroComponent,
    DoacaoGridComponent,
    DoacaoAtualizacaoComponent,
    DoacoesPesquisaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DoacoesModule { }
