import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  periodoInicio?: Date;
  periodoFim?: Date;

  constructor() { }

  ngOnInit(): void {
  }

  gerarRelatorioDoacoes() {
    console.log(this.periodoInicio);
    console.log(this.periodoFim);
  }

}
