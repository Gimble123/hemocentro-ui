import { UsuarioCadastroSegundaTelaComponent } from './usuario-cadastro-segunda-tela/usuario-cadastro-segunda-tela.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { SharedModule } from './../shared/shared.module';
import { CoreModule } from './../core/core.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    UsuarioCadastroComponent,
    UsuarioCadastroSegundaTelaComponent
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
    CoreModule

  ],
  exports: [
    UsuarioCadastroComponent,
    UsuarioCadastroSegundaTelaComponent
  ]
})
export class UsuariosModule { }
