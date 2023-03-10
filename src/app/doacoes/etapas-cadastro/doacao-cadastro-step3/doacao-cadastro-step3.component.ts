import { UsuarioService } from './../../../usuarios/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DoacaoService } from '../../doacao.service';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-doacao-cadastro-step3',
  templateUrl: './doacao-cadastro-step3.component.html',
  styleUrls: ['./doacao-cadastro-step3.component.css']
})
export class DoacaoCadastroStep3Component implements OnInit {

  activeIndex: number = 0

  formulario!: FormGroup;

  usuarios: any[] = []

  editando: boolean = false

  constructor(
    private doacaoService: DoacaoService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Cadastro de doações')
    this.configurarFormulario();

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.editando = true
      this.doacaoService.buscarPorCodigoSteps(id)
        .then(() => {
          this.preencherDoacao()
        })
    } else {
      this.preencherDoacao()
    }

  }

  preencherDoacao() {
    const infoPrincipal = this.doacaoService.getStep3();
    if (infoPrincipal) {
      this.formulario.patchValue(infoPrincipal)
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      htlv: [null, Validators.required],
      antiHbc: [null, Validators.required],
      hbvNat: [null, Validators.required],
      nomePai: [null, Validators.required],
      responsavelColeta: [null, Validators.required],
      usuario: this.formBuilder.group({
        id: [null, Validators.required],
        nome: []
      }),
      volumeColetado: [null, Validators.required]
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

  salvar() {
    this.doacaoService.setStep3(this.formulario.value)
    this.doacaoService.adicionarStep()
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Doação adicionada com sucesso!' });

        this.router.navigate(['/doacoes'])
      }
      ).catch(erro => this.errorHandler.handle(erro));
  }

  voltar() {
    this.router.navigate(['doacoes/doacao-container/doacao-cadastro-step2'])
  }

}
