import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuarios/usuario.service';

@Component({
  selector: 'app-profile-edit-step1',
  templateUrl: './profile-edit-step1.component.html',
  styleUrls: ['./profile-edit-step1.component.css']
})
export class ProfileEditStep1Component implements OnInit {

  activeIndex: number = 0

  formulario!: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Edição do Perfil')
    this.configurarFormulario();

    const idUsuario = this.route.snapshot.params['id'];
    if (idUsuario) {
      this.usuarioService.buscarPorCodigoSteps(idUsuario)
        .then(() => {
          this.preencherUsuario()
        })
    } else {
      this.preencherUsuario()
    }

  }

  preencherUsuario() {
    const infoPrincipal = this.usuarioService.getStep1();
    if (infoPrincipal) {
      this.formulario.patchValue(infoPrincipal)
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      nome: [null, Validators.required],
      email: [null, Validators.required],
      cpf: [null, Validators.required],
      estadoCivil: [null, Validators.required],
      telefone: [null, Validators.required],
      sexo: [null, Validators.required],
      endereco: [null, Validators.required],
      dataNascimento: [null, Validators.required]
    });

  }

  salvar() {
    this.usuarioService.setStep1(this.formulario.value)
    this.router.navigate(['profile-container/profile-edit-step2'])
  }

}
