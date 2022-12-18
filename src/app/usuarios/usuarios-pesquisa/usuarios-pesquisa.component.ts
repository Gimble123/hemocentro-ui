import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-pesquisa',
  templateUrl: './usuarios-pesquisa.component.html',
  styleUrls: ['./usuarios-pesquisa.component.css']
})
export class UsuariosPesquisaComponent {

  usuarios = [
    { id: 1, nome: 'Maria Rita', cpf: '11.400-121',
      telefone: '(41) 40219-6212', dataNascimento: new Date(1987, 12, 26), sexo: 'Feminino' },
    { id: 2, nome: 'Maria Rita', cpf: '11.400-121',
      telefone: '(41) 40219-6212', dataNascimento: new Date(1987, 12, 26), sexo: 'Feminino' },
    { id: 3, nome: 'Maria Rita', cpf: '11.400-121',
      telefone: '(41) 40219-6212', dataNascimento: new Date(1987, 12, 26), sexo: 'Feminino' },
    { id: 4, nome: 'Maria Rita', cpf: '11.400-121',
      telefone: '(41) 40219-6212', dataNascimento: new Date(1987, 12, 26), sexo: 'Feminino' },
    { id: 5, nome: 'Maria Rita', cpf: '11.400-121',
      telefone: '(41) 40219-6212', dataNascimento: new Date(1987, 12, 26), sexo: 'Feminino' },
    { id: 6, nome: 'Maria Rita', cpf: '11.400-121',
      telefone: '(41) 40219-6212', dataNascimento: new Date(1987, 12, 26), sexo: 'Feminino' },
    { id: 7, nome: 'Maria Rita', cpf: '11.400-121',
      telefone: '(41) 40219-6212', dataNascimento: new Date(1987, 12, 26), sexo: 'Feminino' }
  ];

}
