
import { Component, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UsuarioService } from 'src/app/usuarios/usuario.service';

@Component({
  selector: 'app-form-cadastro-container',
  templateUrl: './form-cadastro-container.component.html',
  styleUrls: ['./form-cadastro-container.component.css']
})
export class FormCadastroContainerComponent implements OnDestroy {

  items: MenuItem[] = [];

  constructor(private usuarioService: UsuarioService) {
    this.items = [{
      routerLink: 'form-cadastro-step1'
    },
    {
      routerLink: 'usuario-cadastro-step2'
    },
    {
      routerLink: 'usuario-cadastro-step3'
    }];
  }

  ngOnDestroy(): void {
    this.usuarioService.apagarSteps();
  }

}
