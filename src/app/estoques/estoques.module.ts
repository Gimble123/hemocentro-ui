import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { EstoquesAtualizacaoComponent } from './estoques-atualizacao/estoques-atualizacao.component';
import { EstoquesAtualizacaoRoutingModule } from './estoques-routing.module';


@NgModule({
  declarations: [
    EstoquesAtualizacaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    SharedModule,
    EstoquesAtualizacaoRoutingModule
  ]
})
export class EstoquesAtualizacaoModule { }
