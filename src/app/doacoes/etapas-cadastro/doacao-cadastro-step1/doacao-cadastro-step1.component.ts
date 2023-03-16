import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DoacaoService } from '../../doacao.service';

@Component({
  selector: 'app-doacao-cadastro-step1',
  templateUrl: './doacao-cadastro-step1.component.html',
  styleUrls: ['./doacao-cadastro-step1.component.css']
})
export class DoacaoCadastroStep1Component implements OnInit {

  activeIndex: number = 0

  formulario!: FormGroup;


  constructor(
    private doacaoService: DoacaoService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private title: Title
  ) {}

  ngOnInit(): void {

    this.configurarFormulario();

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.doacaoService.buscarPorCodigoSteps(id)
        .then((doacao) => {
          this.preencherDoacao()
        })
    } else {
      this.preencherDoacao()
    }

  }

  get editando() {
    return Boolean(this.formulario.get('id')?.value)
  }

  preencherDoacao() {
    const infoPrincipal = this.doacaoService.getStep1();
    if (infoPrincipal) {
      this.formulario.patchValue(infoPrincipal)
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      numeroDaBolsa: [null, Validators.required],
      hora: [null, Validators.required],
      pulso: [null, Validators.required],
      hematocrito: [null, Validators.required],
      volumeASerColetado: [null, Validators.required],
      hbsAg: [null, Validators.required],
      numeroDoNat: [null, Validators.required],
      peso: [null, Validators.required]
    });

  }

  salvar() {
    this.doacaoService.setStep1(this.formulario.value)
    this.router.navigate(['doacoes/doacao-container/doacao-cadastro-step2'])
  }

}
