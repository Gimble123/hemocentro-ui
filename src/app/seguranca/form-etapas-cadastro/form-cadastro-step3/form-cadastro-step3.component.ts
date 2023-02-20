import { GrupoSanguineoService } from '../../../grupos-sanguineos/grupo_sanguineo.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UsuarioService } from 'src/app/usuarios/usuario.service';

@Component({
  selector: 'app-form-cadastro-step3',
  templateUrl: './form-cadastro-step3.component.html',
  styleUrls: ['./form-cadastro-step3.component.css']
})
export class FormCadastroStep3Component implements OnInit {

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

    const step3 = this.usuarioService.getStep3();


    if (step3)
      this.formulario.patchValue(step3);

  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      numeroDoacoes: [null, Validators.required],
      bairro: [null, Validators.required],
      cep: [null, Validators.required],
      estado: [null, Validators.required],
      escolaridade: [null, Validators.required],
      cor: [null, Validators.required]
    });

  }

  salvar() {
    console.log('Etapa 3', this.formulario)
    this.usuarioService.setStep3(this.formulario.value)
    this.usuarioService.adicionarStep()
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Cadastro realizado com sucesso! Uma nova senha foi enviada ao seu e-mail' });

        this.router.navigate(['/login'])
      }
      ).catch(erro => this.errorHandler.handle(erro));
  }

  voltar() {
    this.router.navigate(['form-cadastro-container/form-cadastro-step2'])
  }

}
