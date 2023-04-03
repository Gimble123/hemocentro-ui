import { UsuarioService } from './../../../usuarios/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoacaoService } from '../../doacao.service';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-doacao-cadastro-step3',
  templateUrl: './doacao-cadastro-step3.component.html',
  styleUrls: ['./doacao-cadastro-step3.component.css']
})
export class DoacaoCadastroStep3Component implements OnInit {

  activeIndex: number = 2

  formulario!: FormGroup;

  usuarios: any[] = []

  constructor(
    private doacaoService: DoacaoService,
    private usuarioService: UsuarioService,
    private router: Router,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();

    const step3 = this.doacaoService.getStep3();

    if (step3)
      this.formulario.patchValue(step3)

  }


  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      hgs: [null],
      chagas: [null],
      antiHiv: [null],
      vdrl: [null],
      hcv: [null],
      hcvNat: [null],
      htlv: [null],
      antiHbc: [null],
      hbvNat: [null],
      responsavelColeta: [null],
      volumeColetado: [null]
    });

  }

  get editando() {
    return Boolean(this.formulario.get('id')?.value)
  }

  carregarResponsaveis() {
    this.usuarioService.listarTodosResponsaveisColeta()
      .then(responsaveis => {
        this.usuarios = responsaveis
          .map((r: any) => ({ label: r.nome, value: r.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    console.log('this.formulario.value', this.formulario.value)
    this.doacaoService.setStep3(this.formulario.value)
    this.doacaoService.adicionarStep()
      .then(doacaoAdicionada => {
        if (this.editando) {
          this.messageService.add({ severity: 'success', detail: 'Doação editada com sucesso!' });
          console.log(this.messageService)
        } else {
          console.log('Adicionando')
          this.messageService.add({ severity: 'success', detail: 'Doação adicionada com sucesso!' });
        }

        this.router.navigate(['/doacoes/doacao-container/doacao-cadastro-step1/', doacaoAdicionada.id])
      }
      ).catch(erro => this.errorHandler.handle(erro));
  }

  voltar() {
    this.router.navigate(['doacoes/doacao-container/doacao-cadastro-step2'])
  }

}
