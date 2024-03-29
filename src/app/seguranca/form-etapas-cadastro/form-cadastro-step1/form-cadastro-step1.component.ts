import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { GrupoSanguineoService } from 'src/app/grupos-sanguineos/grupo-sanguineo.service';
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
    private grupoSanguineoService: GrupoSanguineoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private title: Title,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService
  ) {
    this.auth.carregarToken();
  }

  ngOnInit(): void {
    this.title.setTitle('Cadastro de usuários')
    this.carregarGrupoSanguineoSemPaginacao();
    this.configurarFormulario();

  }

  carregarGrupoSanguineoSemPaginacao() {
    this.grupoSanguineoService.listarTodosSemPaginacao()
      .then(grupoSanguineo => {
        this.grupoSanguineo = grupoSanguineo.map((g: any) => ({ label: g.nome, value: g.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      grupoSanguineoId: [null, Validators.required],
      nome: [null, Validators.required],
      email: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      cpf: [null, Validators.required],
      telefone: [null, Validators.required]
    });

  }

  salvar() {
    this.auth.setFormStep1(this.formulario.value)
    this.router.navigate(['form-cadastro-container/form-cadastro-step2'])
  }

  voltar() {
    this.router.navigate(['login'])
  }

  exibindoNavbar() {
    return this.router.url !== '/form-cadastro-container/form-cadastro-step1';
  }

}
