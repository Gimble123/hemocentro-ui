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

  constructor(private usuarioService: UsuarioService) {
    this.items = [{
      label: 'Etapa 1',
      routerLink: 'usuario-cadastro-step1'
    },
    {
      label: 'Etapa 2',
      routerLink: 'usuario-cadastro-step2'
    }];
  }

  ngOnDestroy(): void {
    this.usuarioService.apagarSteps();
  }

}
