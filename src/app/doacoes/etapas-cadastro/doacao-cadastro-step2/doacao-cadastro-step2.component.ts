import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DoacaoService } from '../../doacao.service';

@Component({
  selector: 'app-doacao-cadastro-step2',
  templateUrl: './doacao-cadastro-step2.component.html',
  styleUrls: ['./doacao-cadastro-step2.component.css']
})
export class DoacaoCadastroStep2Component implements OnInit {

  activeIndex: number = 0

  formulario!: FormGroup;

  editando: boolean = false

  constructor(
    private doacaoService: DoacaoService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Cadastro de doações')
    this.configurarFormulario();

    const id = this.route.snapshot.params['id'];

    if (id) {
      this.editando = true
      this.doacaoService.buscarPorCodigoSteps(id)
        .then((doacao) => {
          this.preencherDoacao()
        })
    } else {
      this.preencherDoacao()
    }

  }

  preencherDoacao() {
    const infoPrincipal = this.doacaoService.getStep2();
    if (infoPrincipal) {
      this.formulario.patchValue(infoPrincipal)
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      pressaoArterial: [null, Validators.required],
      temperatura: [null, Validators.required],
      hgs: [null, Validators.required],
      chagas: [null, Validators.required],
      antiHiv: [null, Validators.required],
      vdrl: [null, Validators.required],
      hcv: [null, Validators.required],
      hcvNat: [null, Validators.required]
    });

  }

  salvar() {
    this.doacaoService.setStep2(this.formulario.value)
    this.router.navigate(['doacoes/doacao-container/doacao-cadastro-step3'])
  }

  voltar() {
    this.router.navigate(['doacoes/doacao-container/doacao-cadastro-step1'])
  }

}
