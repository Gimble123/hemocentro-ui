import { DoacoesUsuarioPesquisaComponent } from './doacoes-usuario-pesquisa/doacoes-usuario-pesquisa.component';

import { DoacoesUsuarioRoutingModule } from './doacoes-usuario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    DoacoesUsuarioPesquisaComponent
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
    DoacoesUsuarioRoutingModule
  ],
  exports: []
})
export class DoacoesUsuarioModule { }
