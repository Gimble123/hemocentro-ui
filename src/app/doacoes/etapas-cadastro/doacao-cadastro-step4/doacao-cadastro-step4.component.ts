
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoacaoService } from '../../doacao.service';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-doacao-cadastro-step4',
  templateUrl: './doacao-cadastro-step4.component.html',
  styleUrls: ['./doacao-cadastro-step4.component.css']
})
export class DoacaoCadastroStep4Component implements OnInit {

  activeIndex: number = 3

  formulario!: FormGroup;

  usuarios: any[] = []

  constructor(
    private doacaoService: DoacaoService,
    private router: Router,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();

    const step4 = this.doacaoService.getStep4();

    if (step4)
      this.formulario.patchValue(step4)

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
      observacao: [null]
    });

  }

  get editando() {
    return Boolean(this.formulario.get('id')?.value)
  }

  salvar() {
    this.doacaoService.setStep4(this.formulario.value)
    this.router.navigate(['doacoes/doacao-container/doacao-cadastro-step5'])
  }

  voltar() {
    this.router.navigate(['doacoes/doacao-container/doacao-cadastro-step3'])
  }

}
