import { UsuarioService } from '../../usuario.service';
import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-usuario-container',
  templateUrl: './usuario-container.component.html',
  styleUrls: ['./usuario-container.component.css']
})
export class UsuarioContainerComponent implements OnDestroy {

  items: MenuItem[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private title: Title
  ) {}

  ngOnDestroy(): void {
    this.usuarioService.apagarSteps();
  }

  editandoUsuario(): string {
    if (this.usuarioService.editandoUsuario) {
      this.title.setTitle('Edição de usuário')
      return 'Atualização de usuário'
    } else {
      this.title.setTitle('Novo usuário')
      return 'Novo usuário'
    }

  }

}
