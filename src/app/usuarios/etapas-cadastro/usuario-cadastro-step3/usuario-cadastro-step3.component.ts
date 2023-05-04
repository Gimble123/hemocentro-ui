import { PermissaoService } from './../../../permissoes/permissao.service';
import { GrupoSanguineoService } from '../../../grupos-sanguineos/grupo-sanguineo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-usuario-cadastro-step3',
  templateUrl: './usuario-cadastro-step3.component.html',
  styleUrls: ['./usuario-cadastro-step3.component.css']
})
export class UsuarioCadastroStep3Component implements OnInit {

  formulario!: FormGroup;

  grupoSanguineo: any[] = [];
  permissao: any[] = [];

  editando: boolean = false

  constructor(
    private usuarioService: UsuarioService,
    private grupoSanguineoService: GrupoSanguineoService,
    private permissaoService: PermissaoService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private title: Title,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Cadastro de usuários')
    this.configurarFormulario();
    this.carregarGrupoSanguineoSemPaginacao();
    this.carregarPermissoes();

    const id = this.route.snapshot.params['id'];
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
    const infoPrincipal = this.usuarioService.getStep3();
    if (infoPrincipal) {
      this.formulario.patchValue(infoPrincipal)
    }
  }

  configurarFormulario() {

    this.formulario = this.formBuilder.group({
      id: [],
      grupoSanguineoId: [null, Validators.required],
      permissaoId: [null, Validators.required],
      escolaridade: [null, Validators.required],
      numero: [null, Validators.required],
      apto: [null, Validators.required]
    });

  }

  carregarGrupoSanguineoSemPaginacao() {
    this.grupoSanguineoService.listarTodosSemPaginacao()
      .then(grupoSanguineo => {
        this.grupoSanguineo = grupoSanguineo.map((g: any) => ({ label: g.nome, value: g.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPermissoes() {
    return this.permissaoService.listarTodas()
      .then(permissao => {
        this.permissao = permissao
          .map((p: any) => ({ label: p.descricao, value: p.id }))
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    this.usuarioService.setStep3(this.formulario.value)

    this.usuarioService.adicionarStep()
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Usuário adicionado com sucesso!' });

        this.router.navigate(['/usuarios'])
      }
      ).catch(erro => this.errorHandler.handle(erro));
  }

  voltar() {
    this.router.navigate(['usuarios/usuario-container/usuario-cadastro-step2'])
  }

}
