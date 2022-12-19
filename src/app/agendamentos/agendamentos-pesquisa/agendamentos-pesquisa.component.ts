import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamentos-pesquisa',
  templateUrl: './agendamentos-pesquisa.component.html',
  styleUrls: ['./agendamentos-pesquisa.component.css']
})
export class AgendamentosPesquisaComponent {

  agendamentos = [
    { id: 1, dataSolicitacao: new Date(2020, 1, 25), status: 'Pendente'},
    { id: 2, dataSolicitacao: new Date(2020, 1, 25), status: 'Pendente'},
    { id: 3, dataSolicitacao: new Date(2020, 1, 25), status: 'Pendente'},
    { id: 4, dataSolicitacao: new Date(2020, 1, 25), status: 'Rejeitado'},
    { id: 5, dataSolicitacao: new Date(2020, 1, 25), status: 'Aprovado'},
    { id: 6, dataSolicitacao: new Date(2020, 1, 25), status: 'Aprovado'},
    { id: 7, dataSolicitacao: new Date(2020, 1, 25), status: 'Aprovado'}
  ];

}
