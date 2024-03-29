import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { SharedModule } from 'src/app/shared/shared.module';
import { EtapasCadastroRoutingModule } from './etapas-cadastro-routing.module';
import { UsuarioCadastroStep1Component } from './usuario-cadastro-step1/usuario-cadastro-step1.component';
import { UsuarioCadastroStep2Component } from './usuario-cadastro-step2/usuario-cadastro-step2.component';
import { UsuarioCadastroStep3Component } from './usuario-cadastro-step3/usuario-cadastro-step3.component';
import { StepsModule } from 'primeng/steps';

@NgModule({
  declarations: [
    UsuarioCadastroStep1Component,
    UsuarioCadastroStep2Component,
    UsuarioCadastroStep3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InputNumberModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    SharedModule,

    EtapasCadastroRoutingModule,
    StepsModule
  ]
})
export class EtapasModule { }
