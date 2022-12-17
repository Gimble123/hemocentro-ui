import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario-cadastro-segunda-tela',
  templateUrl: './usuario-cadastro-segunda-tela.component.html',
  styleUrls: ['./usuario-cadastro-segunda-tela.component.css']
})
export class UsuarioCadastroSegundaTelaComponent {

  salvar(form: NgForm) {
    console.log(form);
  }

}
