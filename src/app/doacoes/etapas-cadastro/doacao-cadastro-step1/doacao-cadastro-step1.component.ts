import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DoacaoService } from '../../doacao.service';
import { GrupoSanguineoService } from 'src/app/grupos-sanguineos/grupo-sanguineo.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UsuarioService } from 'src/app/usuarios/usuario.service';

@Component({
  selector: 'app-doacao-cadastro-step1',
  templateUrl: './doacao-cadastro-step1.component.html',
  styleUrls: ['./doacao-cadastro-step1.component.css']
})
export class DoacaoCadastroStep1Component implements OnInit {

  activeIndex: number = 0

  formulario!: FormGroup;

  grupoSanguineo: any[] = [];

  usuarios: any[] = []

  constructor(
    private doacaoService: DoacaoService,
    private grupoSanguineoService: GrupoSanguineoService,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.carregarUsuarios();
    this.carregarGrupoSanguineoSemPaginacao();
    this.configurarFormulario();

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.doacaoService.buscarPorCodigoSteps(id)
        .then(() => {
          this.preencherDoacao()
        })
    } else {
      this.preencherDoacao()
    }

  }

  get editando() {
    return Boolean(this.formulario.get('id')?.value)
  }

  preencherDoacao() {
    const infoPrincipal = this.doacaoService.getStep1();

    if (infoPrincipal) {
      this.formulario.patchValue(infoPrincipal)
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      data: [null, Validators.required],
      hora: [null, Validators.required],
      usuarioId: [null, Validators.required],
      tipoDoacao: [null],
      tipoDoador: [null, Validators.required],
      sexoUsuario: [null, Validators.required],
      idadeUsuario: [null, Validators.required],
      grupoSanguineoId: [null, Validators.required]
    });

  }

  carregarUsuarios() {
    this.usuarioService.listarTodos()
      .then(usuarios => {
        this.usuarios = usuarios
          .map((u: any) => ({ label: u.nome, value: u.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarGrupoSanguineoSemPaginacao() {
    this.grupoSanguineoService.listarTodosSemPaginacao()
      .then(grupoSanguineo => {
        this.grupoSanguineo = grupoSanguineo.map((g: any) => ({ label: g.nome, value: g.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    this.doacaoService.setStep1(this.formulario.value)
    this.router.navigate(['doacoes/doacao-container/doacao-cadastro-step2'])
  }

}
