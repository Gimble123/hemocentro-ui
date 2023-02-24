import { UsuariosRoutingModule } from './usuarios-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CoreModule } from './../core/core.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { UsuariosPesquisaComponent } from './usuarios-pesquisa/usuarios-pesquisa.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioContainerComponent } from './etapas-cadastro/usuario-container/usuario-container.component';
import { EtapasModule } from './etapas-cadastro/etapas.module';



@NgModule({
  declarations: [
    UsuariosPesquisaComponent,
    UsuarioContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    SharedModule,
    CoreModule,
    UsuariosRoutingModule,
    StepsModule,
    HttpClientModule,
    EtapasModule

  ],
  exports: []
})
export class UsuariosModule { }
