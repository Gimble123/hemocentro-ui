import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/seguranca/auth.service';
import { ErrorHandlerService } from '../error-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})

export class NavbarComponent implements OnInit {

  isMenuOpen: boolean = false;
  usuarioLogado: string = ''
  menus: any[] = [];

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usuarioLogado = this.auth.jwtPayload?.nome;
    this.menus = this.auth.jwtPayload?.menus;

    this.transform(this.menus);
  }

  transform(records: any): any {
    records = records || [];
    return records.sort((a: any, b: any) => {
      let ma = a.nome.toLowerCase(),
        mb = b.nome.toLowerCase();


      if (ma < mb) {
        return -1;
      }

      if (ma > mb) {
        return 1;
      }

      return 0;

    });
  }

  temPermissao() {
    return this.auth.temPermissao();
  }

  logout() {
    this.auth.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
