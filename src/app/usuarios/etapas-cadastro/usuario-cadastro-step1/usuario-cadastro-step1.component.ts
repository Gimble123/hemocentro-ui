import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario-cadastro-step1',
  templateUrl: './usuario-cadastro-step1.component.html',
  styleUrls: ['./usuario-cadastro-step1.component.css']
})
export class UsuarioCadastroStep1Component implements OnInit {

  activeIndex: number = 0

  formulario!: FormGroup

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      // id: [],
      // nome: ['RECEITA', Validators.required],
      // email: [null, Validators.required],
      // dataPagamento: [],
      // descricao: [null, [Validators.required]],
      // valor: [null, Validators.required],
    });
  }

  salvar() {
    this.usuarioService.setStep1(this.formulario.value)
    this.router.navigate(['usuarios/etapa-container/usuario-cadastro-step2'])
  }

}
