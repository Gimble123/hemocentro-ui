
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoacaoService } from '../../doacao.service';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-doacao-cadastro-step5',
  templateUrl: './doacao-cadastro-step5.component.html',
  styleUrls: ['./doacao-cadastro-step5.component.css']
})
export class DoacaoCadastroStep5Component implements OnInit {

  activeIndex: number = 4

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

    const step5 = this.doacaoService.getStep5();

    if (step5)
      this.formulario.patchValue(step5)

  }


  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      hbv: [null],
      antiHcv: [null]
    });

  }

  get editando() {
    return Boolean(this.formulario.get('id')?.value)
  }

  salvar() {
    this.doacaoService.setStep5(this.formulario.value)
    this.doacaoService.adicionarStep()
      .then(() => {
        if (this.editando) {
          console.log('Editando')
          this.messageService.add({ severity: 'success', detail: 'Doação editada com sucesso!' });
        } else {
          console.log('Adicionando')
          this.messageService.add({ severity: 'success', detail: 'Doação cadastrada com sucesso!' });
        }

        this.router.navigate(['/doacoes'])
       }
      ).catch(erro => this.errorHandler.handle(erro));
  }

  voltar() {
    this.router.navigate(['doacoes/doacao-container/doacao-cadastro-step4'])
  }

}
