import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './../core/core.module';
import { CampanhaCadastroComponent } from './campanha-cadastro/campanha-cadastro.component';
import { CampanhasPesquisaComponent } from './campanhas-pesquisa/campanhas-pesquisa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SharedModule } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { CampanhasRoutingModule } from './campanhas-routing.module';



@NgModule({
  declarations: [
    CampanhasPesquisaComponent,
    CampanhaCadastroComponent
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
    CampanhasRoutingModule
  ],
  exports: []
})
export class CampanhasModule { }
