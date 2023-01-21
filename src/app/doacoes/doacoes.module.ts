import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoacaoCadastroComponent } from './doacao-cadastro/doacao-cadastro.component';
import { DoacaoGridComponent } from './doacao-grid/doacao-grid.component';
import { DoacaoAtualizacaoComponent } from './doacao-atualizacao/doacao-atualizacao.component';
import { DoacoesPesquisaComponent } from './doacoes-pesquisa/doacoes-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DoacaoCadastroComponent,
    DoacaoGridComponent,
    DoacaoAtualizacaoComponent,
    DoacoesPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class DoacoesModule { }
