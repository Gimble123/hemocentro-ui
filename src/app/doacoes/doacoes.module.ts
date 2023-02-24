import { EtapasModule } from './../doacoes/etapas-cadastro/etapas.module';

import { DoacoesRoutingModule } from './doacoes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { StepsModule } from 'primeng/steps';
import { DoacaoContainerComponent } from './etapas-cadastro/doacao-container/doacao-container.component';


@NgModule({
  declarations: [
    DoacoesPesquisaComponent,
    DoacaoContainerComponent
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
    DoacoesRoutingModule,
    StepsModule,
    EtapasModule
  ],
  exports: []
})
export class DoacoesModule { }
