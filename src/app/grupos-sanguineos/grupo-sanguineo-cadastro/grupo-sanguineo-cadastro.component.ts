import { GrupoSanguineo } from './../../core/model';
import { GrupoSanguineoService } from './../grupo_sanguineo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-grupo-sanguineo-cadastro',
  templateUrl: './grupo-sanguineo-cadastro.component.html',
  styleUrls: ['./grupo-sanguineo-cadastro.component.css']
})
export class GrupoSanguineoCadastroComponent implements OnInit {

  grupoSanguineo = new GrupoSanguineo();

  constructor(
    private grupoSanguineoService: GrupoSanguineoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit() {
    const idGrupoSanguineo = this.route.snapshot.params['id'];

    this.title.setTitle('Novo grupo sanguíneo');

    if (idGrupoSanguineo && idGrupoSanguineo !== 'novo') {
      this.carregarGrupoSanguineo(idGrupoSanguineo);
    }
  }

  carregarGrupoSanguineo(id: number) {
    this.grupoSanguineoService.buscarPorId(id)
      .then((grupo: GrupoSanguineo) => {
        this.grupoSanguineo = grupo
        this.atualizarTituloEdicao()
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  novo(form: NgForm) {
    form.reset();

    setTimeout(() => {
      this.grupoSanguineo = new GrupoSanguineo();
    }, 1);

    this.router.navigate(['grupos-sanguineos', 'novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de grupo sanguíneo: ${this.grupoSanguineo.nome}`);
  }

}
