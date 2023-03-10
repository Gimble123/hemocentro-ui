import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usuario-cadastro-step2',
  templateUrl: './usuario-cadastro-step2.component.html',
  styleUrls: ['./usuario-cadastro-step2.component.css']
})
export class UsuarioCadastroStep2Component implements OnInit {

  formulario!: FormGroup;

  editando: boolean = false

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Cadastro de usuários')
    this.configurarFormulario();

    const id = this.route.snapshot.params['id'];
    console.log('DoaçãoId 2: ', id)
    if (id) {
      this.editando = true
      this.usuarioService.buscarPorCodigoSteps(id)
        .then(() => {
          this.preencherUsuario()
        })
    } else {
      this.preencherUsuario()
    }

  }

  preencherUsuario() {
    const infoPrincipal = this.usuarioService.getStep2();
    if (infoPrincipal) {
      this.formulario.patchValue(infoPrincipal)
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      numeroDoacoesPrevias: [null, Validators.required],
      profissao: [null, Validators.required],
      bairro: [null, Validators.required],
      nacionalidade: [null, Validators.required],
      estado: [null, Validators.required],
      cidade: [null, Validators.required],
      cor: [null, Validators.required],
      cep: [null, Validators.required],
    });

  }

  voltar() {
    this.router.navigate(['usuarios/usuario-container/usuario-cadastro-step1'])
  }

  salvar() {
    this.usuarioService.setStep2(this.formulario.value)
    this.router.navigate(['usuarios/usuario-container/usuario-cadastro-step3'])
  }

}
