import { Endereco } from './../../../core/model';
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

    //console.log('Formulário: ', this.configurarFormulario())
    const idUsuario = this.route.snapshot.params['id'];
    if (idUsuario) {
      this.usuarioService.buscarPorCodigoSteps(idUsuario)
        .then(() => {
          this.preencherUsuario()
        })
    } else {
      this.preencherUsuario()
    }

  }

  get editando() {
    return Boolean(this.formulario.get('id')?.value)
  }

  preencherUsuario() {
    const infoPrincipal = this.usuarioService.getStep1();
    if (infoPrincipal) {
      //console.log(this.usuarioService.usuarioCadastroEtapa1)
      this.formulario.patchValue(infoPrincipal)
    }
  }

  configurarFormulario() {
    //console.log('jashgdajdgsad: ',this.usuarioService.usuarioCadastroEtapa1?.endereco.logradouro)
    this.formulario = this.formBuilder.group({
      id: [],
      nome: [null, Validators.required],
      email: [null, Validators.required],
      cpf: [null, Validators.required],
      estadoCivil: [null, Validators.required],
      telefone: [null, Validators.required],
      sexo: [null, Validators.required],
      endereco: this.formBuilder.group({
        id: [null, Validators.required],
        logradouro: ['', Validators.required]
      }),
      profissao: [null, Validators.required],
      numeroDoacoes: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      value: [null, Validators.required]
    });

   // console.log('Formulário: ', this.formulario)
  }

  salvar() {

    this.usuarioService.setStep1(this.formulario.value)
    this.router.navigate(['usuarios/etapa-container/usuario-cadastro-step2'])
  }

}
