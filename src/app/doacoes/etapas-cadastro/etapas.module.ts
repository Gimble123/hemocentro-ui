import { DoacaoCadastroStep3Component } from './doacao-cadastro-step3/doacao-cadastro-step3.component';
import { DoacaoCadastroStep2Component } from './doacao-cadastro-step2/doacao-cadastro-step2.component';
import { DoacaoCadastroStep1Component } from './doacao-cadastro-step1/doacao-cadastro-step1.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { EtapasCadastroRoutingModule } from './etapas-cadastro-routing.module';
import { DoacaoCadastroStep4Component } from './doacao-cadastro-step4/doacao-cadastro-step4.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoacaoCadastroStep5Component } from './doacao-cadastro-step5/doacao-cadastro-step5.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

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

    EtapasCadastroRoutingModule
  ],
  declarations: [
    DoacaoCadastroStep1Component,
    DoacaoCadastroStep2Component,
    DoacaoCadastroStep3Component,
    DoacaoCadastroStep4Component,
    DoacaoCadastroStep5Component
  ]
})
export class EtapasModule { }
