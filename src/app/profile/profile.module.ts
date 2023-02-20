import { RouterModule } from '@angular/router';
import { EtapasModule } from './../usuarios/etapas-cadastro/etapas.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

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
import { HttpClientModule } from '@angular/common/http';
import { ProfileEditStep1Component } from './profile-edit-step1/profile-edit-step1.component';
import { ProfileEditStep2Component } from './profile-edit-step2/profile-edit-step2.component';
import { ProfileEditStep3Component } from './profile-edit-step3/profile-edit-step3.component';



@NgModule({
  declarations: [
    ProfileEditStep1Component,
    ProfileEditStep2Component,
    ProfileEditStep3Component
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
    StepsModule,
    HttpClientModule,
    ProfileRoutingModule,
    EtapasModule
  ]
})
export class ProfileModule { }
