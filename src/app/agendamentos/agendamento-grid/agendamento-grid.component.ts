import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento-grid',
  templateUrl: './agendamento-grid.component.html',
  styleUrls: ['./agendamento-grid.component.css']
})
export class AgendamentoGridComponent implements OnInit {

  @Input() agendamentos:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
