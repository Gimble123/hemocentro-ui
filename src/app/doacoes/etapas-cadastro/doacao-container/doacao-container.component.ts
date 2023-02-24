import { DoacaoService } from './../../doacao.service';
import { Component, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-doacao-container',
  templateUrl: './doacao-container.component.html',
  styleUrls: ['./doacao-container.component.css']
})
export class DoacaoContainerComponent implements OnDestroy {

  items: MenuItem[] = [];

  constructor(private doacaoService: DoacaoService) {

    this.items = [
      {
      routerLink: 'doacao-cadastro-step1'
      },
      {
      routerLink: 'doacao-cadastro-step2'
      }
    ];
  }

  ngOnDestroy(): void {
    this.doacaoService.apagarSteps();
  }

}
