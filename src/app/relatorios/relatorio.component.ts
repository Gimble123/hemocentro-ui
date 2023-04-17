import { Component, OnInit } from '@angular/core';

import { RelatoriosService } from './relatorios.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  periodoInicio?: Date;
  periodoFim?: Date;

  constructor(private relatoriosService: RelatoriosService) { }

  ngOnInit(): void {
  }

  gerarRelatorioDoacoesMensais() {
    this.relatoriosService.relatorioDoacoesMensais(this.periodoInicio!, this.periodoFim!)
      .then(relatorio => {
        const url = window.URL.createObjectURL(relatorio);

        window.open(url);
      })
  }

}
