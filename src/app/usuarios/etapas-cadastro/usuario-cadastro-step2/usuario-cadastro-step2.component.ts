import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-usuario-cadastro-step2',
  templateUrl: './usuario-cadastro-step2.component.html',
  styleUrls: ['./usuario-cadastro-step2.component.css']
})
export class UsuarioCadastroStep2Component implements OnInit {

  formulario!: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Cadastro de usuários')
    this.configurarFormulario();

    const step2 = this.usuarioService.getStep2();

    if (step2)
      this.formulario.patchValue(step2);

  }

  get editando() {
    return Boolean(this.formulario.get('id')?.value)
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
