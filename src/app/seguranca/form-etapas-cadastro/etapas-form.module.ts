import { CoreModule } from './../../core/core.module';
import { NavbarComponent } from './../../core/navbar/navbar.component';
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
import { EtapasFormCadastroRoutingModule } from './etapas-form-cadastro-routing.module';
import { FormCadastroStep1Component } from './form-cadastro-step1/form-cadastro-step1.component';
import { FormCadastroStep2Component } from './form-cadastro-step2/form-cadastro-step2.component';
import { FormCadastroStep3Component } from './form-cadastro-step3/form-cadastro-step3.component';

@NgModule({
  declarations: [
    FormCadastroStep1Component,
    FormCadastroStep2Component,
    FormCadastroStep3Component
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
    EtapasFormCadastroRoutingModule,
    CoreModule
  ]
})
export class EtapasFormModule { }
