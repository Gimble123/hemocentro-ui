import { UsuarioGridComponent } from './usuario-grid/usuario-grid.component';
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
import { UsuariosPesquisaComponent } from './usuarios-pesquisa/usuarios-pesquisa.component';
import { UsuarioAtualizacaoComponent } from './usuario-atualizacao/usuario-atualizacao.component';
import { UsuarioAtualizacaoSegundaTelaComponent } from './usuario-atualizacao-segunda-tela/usuario-atualizacao-segunda-tela.component';



@NgModule({
  declarations: [
    UsuarioCadastroComponent,
    UsuarioCadastroSegundaTelaComponent,
    UsuarioGridComponent,
    UsuariosPesquisaComponent,
    UsuarioAtualizacaoComponent,
    UsuarioAtualizacaoSegundaTelaComponent
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
    UsuarioCadastroSegundaTelaComponent,
    UsuarioGridComponent,
    UsuariosPesquisaComponent
  ]
})
export class UsuariosModule { }
