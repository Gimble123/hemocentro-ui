import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { RelatoriosRoutingModule } from './relatorios-routing.module';

import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { RelatorioComponent } from './relatorio.component';


@NgModule({
  declarations: [
    RelatorioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    SharedModule,
    RelatoriosRoutingModule
  ]
})
export class RelatoriosModule { }
