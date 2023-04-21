import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { EstoquesRoutingModule } from './estoques-routing.module';
import { EstoquesPesquisaComponent } from './estoques-pesquisa/estoques-pesquisa.component';
import { EstoqueCadastroComponent } from './estoque-cadastro/estoque-cadastro.component';
import { CoreModule } from '../core/core.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EstoquesPesquisaComponent,
    EstoqueCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    EstoquesRoutingModule
  ]
})
export class EstoquesModule { }
