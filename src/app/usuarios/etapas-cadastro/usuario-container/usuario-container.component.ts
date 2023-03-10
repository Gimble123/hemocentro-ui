import { UsuarioService } from '../../usuario.service';
import { Component, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-usuario-container',
  templateUrl: './usuario-container.component.html',
  styleUrls: ['./usuario-container.component.css']
})
export class UsuarioContainerComponent implements OnDestroy {

  items: MenuItem[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnDestroy(): void {
    this.usuarioService.apagarSteps();
  }

  editandoUsuario(): string {
    if (this.usuarioService.editandoUsuario)
      return 'Atualização de usuário'

    return 'Novo usuário'
  }

}
