import { Component, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UsuarioService } from 'src/app/usuarios/usuario.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnDestroy {

  items: MenuItem[] = [];

  constructor(private usuarioService: UsuarioService) {
    this.items = [{
      routerLink: 'profile-edit-step1'
    },
    {
      routerLink: 'profile-edit-step2'
    },
    {
      routerLink: 'profile-edit-step3'
    }];
  }

  ngOnDestroy(): void {
    this.usuarioService.apagarSteps();
  }

}
