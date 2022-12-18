import { CoreModule } from './../core/core.module';
import { CampanhaAtualizacaoComponent } from './campanha-atualizacao/campanha-atualizacao.component';
import { CampanhaGridComponent } from './campanha-grid/campanha-grid.component';
import { CampanhaCadastroComponent } from './campanha-cadastro/campanha-cadastro.component';
import { CampanhasPesquisaComponent } from './campanhas-pesquisa/campanhas-pesquisa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SharedModule } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    CampanhasPesquisaComponent,
    CampanhaCadastroComponent,
    CampanhaGridComponent,
    CampanhaAtualizacaoComponent
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
    SharedModule
  ],
  exports: [
    CampanhasPesquisaComponent,
    CampanhaCadastroComponent,
    CampanhaGridComponent,
    CampanhaAtualizacaoComponent
  ]
})
export class CampanhasModule { }