import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarUsuarioComponent } from './navbar-usuario/navbar-usuario.component';



@NgModule({
  declarations: [NavbarComponent, NavbarUsuarioComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    NavbarUsuarioComponent
  ]
})
export class CoreModule { }
