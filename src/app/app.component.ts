import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  openmenu = false;
  @ViewChild('menu') elementView: any;

  constructor(
    private config: PrimeNGConfig,
    private translateService: TranslateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.translateService.setDefaultLang('pt');
    this.translateService.get('primeng')
      .subscribe(res => this.config.setTranslation(res));
  }


  openMenu() {
    if(this.elementView.nativeElement.clientWidth <= 992){
      if(this.openmenu){
        this.openmenu = false
      }else{
        this.openmenu = true
      }
    }
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
