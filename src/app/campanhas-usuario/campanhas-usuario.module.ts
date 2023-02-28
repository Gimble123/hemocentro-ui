import { CampanhasUsuarioPesquisaComponent } from './campanhas-usuario-pesquisa/campanhas-usuario-pesquisa.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
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
import { CampanhasUsuarioRoutingModule } from './campanhas-usuario-routing.module';



@NgModule({
  declarations: [
    CampanhasUsuarioPesquisaComponent
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
    CampanhasUsuarioRoutingModule
  ],
  exports: []
})
export class CampanhasUsuarioModule { }
