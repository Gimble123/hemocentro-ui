import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { TabViewModule } from 'primeng/tabview';
import { SharedModule } from './shared/shared.module';
import { CampanhaGridComponent } from './campanha-grid/campanha-grid.component';
import { TableModule } from 'primeng/table';
import { CampanhasPesquisaComponent } from './campanhas-pesquisa/campanhas-pesquisa.component';
import { CampanhaCadastroComponent } from './campanha-cadastro/campanha-cadastro.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampanhaAtualizacaoComponent } from './campanha-atualizacao/campanha-atualizacao.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioCadastroSegundaTelaComponent } from './usuario-cadastro-segunda-tela/usuario-cadastro-segunda-tela.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeAdminComponent,
    CampanhaGridComponent,
    CampanhasPesquisaComponent,
    CampanhaCadastroComponent,
    CampanhaAtualizacaoComponent,
    UsuarioCadastroComponent,
    UsuarioCadastroSegundaTelaComponent,
    MessageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    SharedModule,
    TableModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
