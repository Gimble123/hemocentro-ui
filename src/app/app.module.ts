import { CoreModule } from './core/core.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { GruposSanguineosModule } from './grupos-sanguineos/grupos-sanguineos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampanhasModule } from './campanhas/campanhas.module';
import { GruposSanguineosPesquisaComponent } from './grupos-sanguineos/grupos-sanguineos-pesquisa/grupos-sanguineos-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    CampanhasModule,
    UsuariosModule,
    GruposSanguineosModule,
    SegurancaModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
