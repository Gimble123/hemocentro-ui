import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { TabViewModule } from 'primeng/tabview';
import { SharedModule } from './shared/shared.module';
import { CampanhaComponent } from './campanha/campanha.component';
import { CampanhaGridComponent } from './campanha-grid/campanha-grid.component';
import { TableModule } from 'primeng/table';
import { CampanhasPesquisaComponent } from './campanhas-pesquisa/campanhas-pesquisa.component';
import { CampanhaCadastroComponent } from './campanha-cadastro/campanha-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeAdminComponent,
    CampanhaComponent,
    CampanhaGridComponent,
    CampanhasPesquisaComponent,
    CampanhaCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    SharedModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
