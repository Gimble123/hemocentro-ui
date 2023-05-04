import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usuario-cadastro-step1',
  templateUrl: './usuario-cadastro-step1.component.html',
  styleUrls: ['./usuario-cadastro-step1.component.css']
})
export class UsuarioCadastroStep1Component implements OnInit {

  activeIndex: number = 0

  formulario!: FormGroup;

  editando: boolean = false

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Cadastro de usuários')
    this.configurarFormulario();

    const id = this.route.snapshot.params['id'];

    if (id) {
      this.usuarioService.buscarPorCodigoSteps(id)
        .then(() => {
          this.preencherUsuario()
        })
    } else {
      this.preencherUsuario()
    }

  }

  preencherUsuario() {
    const infoPrincipal = this.usuarioService.getStep1();
    console.log('info user: ', infoPrincipal)
    if (infoPrincipal) {
      this.formulario.patchValue(infoPrincipal)
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      nome: [null, Validators.required],
      email: [null, Validators.required],
      cpf: [null, Validators.required],
      estadoCivil: [null, Validators.required],
      telefone: [null, Validators.required],
      sexo: [null, Validators.required],
      logradouro: [null, Validators.required],
      dataNascimento: [null, Validators.required]
    });

  }

  salvar() {
    this.usuarioService.setStep1(this.formulario.value)
    this.router.navigate(['usuarios/usuario-container/usuario-cadastro-step2'])
  }

}
