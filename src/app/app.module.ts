import { EstoquesModule } from './estoques/estoques.module';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import { DoacoesModule } from './doacoes/doacoes.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { SolicitacoesModule } from './solicitacoes/solicitacoes.module';
import { CoreModule } from './core/core.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { GruposSanguineosModule } from './grupos-sanguineos/grupos-sanguineos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampanhasModule } from './campanhas/campanhas.module';
import { AppRoutingModule } from './app-routing.module';
import { CampanhasUsuarioModule } from './campanhas-usuario/campanhas-usuario.module';
import { DoacoesUsuarioComponent } from './doacoes-usuario/doacoes-usuario.component';
import { DoacoesUsuarioPesquisaComponent } from './doacoes-usuario/doacoes-usuario-pesquisa/doacoes-usuario-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    DoacoesUsuarioComponent,
    DoacoesUsuarioPesquisaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    CampanhasModule,
    CampanhasUsuarioModule,
    UsuariosModule,
    GruposSanguineosModule,
    SolicitacoesModule,
    AgendamentosModule,
    DoacoesModule,
    CoreModule,
    SegurancaModule,
    AppRoutingModule,
    ProfileModule,
    EstoquesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
