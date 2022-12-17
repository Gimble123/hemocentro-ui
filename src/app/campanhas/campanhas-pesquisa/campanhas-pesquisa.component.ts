import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campanhas-pesquisa',
  templateUrl: './campanhas-pesquisa.component.html',
  styleUrls: ['./campanhas-pesquisa.component.css']
})
export class CampanhasPesquisaComponent {

  campanhas = [
    { id: 1, nomeCampanha: 'Sangue B -', tipoSanguineo: 'B -',
      de: new Date(2020, 1, 25), ate: new Date(2020, 2, 25), numeroDeDoadoresAlcancados: 30 },
    { id: 2, nomeCampanha: 'Sangue AB +', tipoSanguineo: 'AB +',
      de: new Date(2020, 1, 25), ate: new Date(2020, 2, 25), numeroDeDoadoresAlcancados: 30 },
    { id: 3, nomeCampanha: 'Sangue B -', tipoSanguineo: 'B -',
      de: new Date(2020, 1, 25), ate: new Date(2020, 2, 25), numeroDeDoadoresAlcancados: 30 },
    { id: 4, nomeCampanha: 'Sangue B -', tipoSanguineo: 'B -',
      de: new Date(2020, 1, 25), ate: new Date(2020, 2, 25), numeroDeDoadoresAlcancados: 30 },
    { id: 5, nomeCampanha: 'Sangue B -', tipoSanguineo: 'B -',
      de: new Date(2020, 1, 25), ate: new Date(2020, 2, 25), numeroDeDoadoresAlcancados: 30 },
    { id: 6, nomeCampanha: 'Sangue B -', tipoSanguineo: 'B -',
      de: new Date(2020, 1, 25), ate: new Date(2020, 2, 25), numeroDeDoadoresAlcancados: 30 },
    { id: 7, nomeCampanha: 'Sangue B -', tipoSanguineo: 'B -',
      de: new Date(2020, 1, 25), ate: new Date(2020, 2, 25), numeroDeDoadoresAlcancados: 30 }
  ];


}
