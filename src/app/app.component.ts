import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hemocentro-ui';

  constructor(
    private config: PrimeNGConfig,
    private translateService: TranslateService,
    private router: Router,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {
    const script = this.renderer2.createElement('script');
    script.type = 'text/javascript';
    script.src = './assets/navbar-mobile.js';
    this.renderer2.appendChild(document.body, script);
    this.translateService.setDefaultLang('pt');
    this.translateService.get('primeng')
      .subscribe(res => this.config.setTranslation(res));
  }

  exibindoNavbar() {
    return this.router.url !== '/login';
  }

  exibindoNavbarCadastro1() {
    return this.router.url !== '/form-cadastro-container/form-cadastro-step1';
  }

  exibindoNavbarCadastro2() {
    return this.router.url !== '/form-cadastro-container/form-cadastro-step2';
  }

  exibindoNavbarCadastro3() {
    return this.router.url !== '/form-cadastro-container/form-cadastro-step3';
  }

  exibindoNavbarResetPassword() {
    return this.router.url !== '/reset-senha';
  }

}
