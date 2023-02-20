import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UsuarioService } from 'src/app/usuarios/usuario.service';

@Component({
  selector: 'app-form-cadastro-step2',
  templateUrl: './form-cadastro-step2.component.html',
  styleUrls: ['./form-cadastro-step2.component.css']
})
export class FormCadastroStep2Component implements OnInit {

  formulario!: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Cadastro de usuários')
    this.configurarFormulario();

    const step2 = this.usuarioService.getStep2();

    if (step2)
      this.formulario.patchValue(step2);

  }

  preencherUsuario() {
    const infoPrincipal = this.usuarioService.getStep2();
    if (infoPrincipal) {
      this.formulario.patchValue(infoPrincipal)
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nacionalidade: [null, Validators.required],
      sexo: [null, Validators.required],
      estadoCivil: [null, Validators.required],
      cidade: [null, Validators.required],
      endereco: [null, Validators.required],
      profissao: [null, Validators.required]
    });

  }

  voltar() {
    this.router.navigate(['form-cadastro-container/form-cadastro-step1'])
  }

  salvar() {
    console.log('Etapa 2', this.formulario)
    this.usuarioService.setStep2(this.formulario.value)
    this.router.navigate(['form-cadastro-container/form-cadastro-step3'])
  }

}
