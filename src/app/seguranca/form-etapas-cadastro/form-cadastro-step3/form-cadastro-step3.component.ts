import { AuthService } from 'src/app/seguranca/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-form-cadastro-step3',
  templateUrl: './form-cadastro-step3.component.html',
  styleUrls: ['./form-cadastro-step3.component.css']
})
export class FormCadastroStep3Component implements OnInit {

  formulario!: FormGroup;

  grupoSanguineo: any[] = [];

  constructor(
    private auth: AuthService,
    private messageService: MessageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private title: Title,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Cadastro de usuários')
    this.configurarFormulario();

    const step3 = this.auth.getFormStep3();


    if (step3)
      this.formulario.patchValue(step3);

  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      profissao: [null, Validators.required],
      numeroDoacoesPrevias: [null, Validators.required],
      bairro: [null, Validators.required],
      cep: [null, Validators.required],
      estado: [null, Validators.required],
      escolaridade: [null, Validators.required],
      cor: [null, Validators.required]
    });

  }

  realizarTriagem(): void {
    this.confirmationService.confirm({
      message: 'Deseja iniciar a triagem agora?',
      accept: () => {
        window.location.href = "https://web.telegram.org/k/#@VitalHemoterapia_bot";
      }
    });
  }

  salvar() {
    this.auth.setFormStep3(this.formulario.value)
    this.auth.adicionarStepFormCadastro()
      .then(() => {
        this.realizarTriagem();
        this.messageService.add({ severity: 'success', detail: 'Cadastro realizado com sucesso! Uma nova senha foi enviada ao seu e-mail' });

        this.router.navigate(['/login'])
      }
      ).catch(erro => this.errorHandler.handle(erro));
  }

  voltar() {
    this.router.navigate(['form-cadastro-container/form-cadastro-step2'])
  }

}
