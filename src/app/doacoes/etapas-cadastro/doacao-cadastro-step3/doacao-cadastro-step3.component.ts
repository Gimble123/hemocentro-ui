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

  constructor(
    private doacaoService: DoacaoService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private title: Title,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Cadastro de doações')
    this.configurarFormulario();

    const doacaoId = this.route.snapshot.params['doacaoId'];
    if (doacaoId) {
      this.doacaoService.buscarPorCodigoSteps(doacaoId)
        .then(() => {
          this.preencherDoacao()
        })
    } else {
      this.preencherDoacao()
    }

  }

  get editando() {
    return Boolean(this.formulario.get('doacaoId')?.value)
  }

  preencherDoacao() {
    const infoPrincipal = this.doacaoService.getStep3();
    if (infoPrincipal) {
      this.formulario.patchValue(infoPrincipal)
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      doacaoId: [],
      htlv: [null, Validators.required],
      antiHbc: [null, Validators.required],
      hbvNat: [null, Validators.required],
      nomePai: [null, Validators.required],
      responsavelColeta: [null, Validators.required],
      usuario: [null, Validators.required],
      volumeColetado: [null, Validators.required]
    });

  }

  salvar() {
    this.doacaoService.setStep3(this.formulario.value)
    this.doacaoService.adicionarStep()
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Doação adicionado com sucesso!' });

        this.router.navigate(['/doacoes'])
      }
      ).catch(erro => this.errorHandler.handle(erro));
  }

  voltar() {
    this.router.navigate(['doacoes/doacao-container/doacao-cadastro-step2'])
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de doação`);
  }

}
