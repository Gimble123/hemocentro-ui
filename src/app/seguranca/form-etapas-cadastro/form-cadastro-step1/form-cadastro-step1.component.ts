import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/usuarios/usuario.service';
import { GrupoSanguineoService } from 'src/app/grupos-sanguineos/grupo_sanguineo.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-form-cadastro-step1',
  templateUrl: './form-cadastro-step1.component.html',
  styleUrls: ['./form-cadastro-step1.component.css']
})
export class FormCadastroStep1Component implements OnInit {

  activeIndex: number = 0

  formulario!: FormGroup;

  grupoSanguineo: any[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private grupoSanguineoService: GrupoSanguineoService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private auth: AuthService
  ) {
    this.auth.carregarToken();
  }

  ngOnInit(): void {
    // this.carregarGrupoSanguineoSemPaginacao();
    this.title.setTitle('Cadastro de usuários')
    // this.configurarFormulario();

  }

  // configurarFormulario() {
  //   this.formulario = this.formBuilder.group({
  //     id: [],
  //     nome: [null, Validators.required],
  //     email: [null, Validators.required],
  //     cpf: [null, Validators.required],
  //     estadoCivil: [null, Validators.required],
  //     telefone: [null, Validators.required],
  //     sexo: [null, Validators.required],
  //     endereco: [null, Validators.required],
  //     dataNascimento: [null, Validators.required]
  //   });

  // }

  // carregarGrupoSanguineoSemPaginacao() {
  //   this.grupoSanguineoService.listarTodosSemPaginacao()
  //     .then(grupoSanguineo => {
  //       this.grupoSanguineo = grupoSanguineo.map((g: any) => ({ label: g.nome, value: g.id }));
  //     })
  //     .catch(erro => this.errorHandler.handle(erro));
  // }

  salvar() {
    console.log('Etapa 1', this.formulario)
    this.usuarioService.setStep1(this.formulario.value)
    this.router.navigate(['usuarios/usuario-container/usuario-cadastro-step2'])
  }

  exibindoNavbar() {
    return this.router.url !== '/form-cadastro-container/form-cadastro-step1';
  }

}
