import { GrupoSanguineoService } from './../../../grupos-sanguineos/grupo_sanguineo.service';
import { Router } from '@angular/router';
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

  constructor(
    private usuarioService: UsuarioService,
    private grupoSanguineoService: GrupoSanguineoService,
    private messageService: MessageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private title: Title,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Cadastro de usuários')
    this.configurarFormulario();
    this.carregarGrupoSanguineoSemPaginacao();

    const step3 = this.usuarioService.getStep3();


    if (step3)
      this.formulario.patchValue(step3);

  }

  get editando() {
    return Boolean(this.formulario.get('id')?.value)
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      grupoSanguineo: this.formBuilder.group({
        grupoSanguineoId: [null, Validators.required],
        nome: []
      })
    });

  }

  carregarGrupoSanguineoSemPaginacao() {
    this.grupoSanguineoService.listarTodosSemPaginacao()
      .then(grupoSanguineo => {
        this.grupoSanguineo = grupoSanguineo.map((g: any) => ({ label: g.nome, value: g.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    console.log('Etapa 3', this.formulario)
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
