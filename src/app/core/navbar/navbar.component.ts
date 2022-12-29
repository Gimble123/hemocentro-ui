import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/seguranca/auth.service';
import { ErrorHandlerService } from '../error-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  usuarioLogado: string = ''

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usuarioLogado = this.auth.jwtPayload?.nome;
    console.log('kskskssk: ', this.auth.jwtPayload?.admin);
    this.menus(this.auth.jwtPayload?.admin);
  }

  temPermissao(flag: boolean) {
    return this.auth.temPermissao();
  }

  menus(type: boolean){
   let render = []
    if(type){
      render.push({
        value: 'home',
        icon: 'fa-solid fa-house'
      },{
        value: 'home'
      },{
        value: 'home'
      })
    }else{
      render.push({
        value: 'home'
      })
    }

    return render
  }

  logout() {
    this.auth.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
