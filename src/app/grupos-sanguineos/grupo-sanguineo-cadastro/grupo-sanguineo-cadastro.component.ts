import { GrupoSanguineo } from './../../core/model';
import { GrupoSanguineoService } from '../grupo-sanguineo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-grupo-sanguineo-cadastro',
  templateUrl: './grupo-sanguineo-cadastro.component.html',
  styleUrls: ['./grupo-sanguineo-cadastro.component.css']
})
export class GrupoSanguineoCadastroComponent implements OnInit {

  grupoSanguineo = new GrupoSanguineo();
  idGrupoSanguineo: number;

  constructor(
    private grupoSanguineoService: GrupoSanguineoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {
    this.idGrupoSanguineo = this.route.snapshot.params['id'];
  }

  ngOnInit() {


    this.title.setTitle('Novo grupo sanguíneo');

    if (this.idGrupoSanguineo) {
      this.carregarGrupoSanguineo(this.idGrupoSanguineo);
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

  get editando() {
    return Boolean(this.idGrupoSanguineo)
  }

  salvar() {
    if (this.editando) {
      this.atualizarGrupoSanguineo();
    } else {
      this.adicionarGrupoSanguineo();
    }
  }

  adicionarGrupoSanguineo() {
    this.grupoSanguineoService.adicionar(this.grupoSanguineo)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Grupo Sanguíneo adicionado com sucesso!' });

        this.router.navigate(['grupos-sanguineos']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarGrupoSanguineo() {
    console.log('Grupo Sanguineo Atualização: ', this.grupoSanguineo)
    this.grupoSanguineoService.atualizar(this.grupoSanguineo)
      .then(() => {

        this.messageService.add({ severity: 'success', detail: 'Grupo Sangíneo alterado com sucesso!' });

        this.router.navigate(['grupos-sanguineos']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de grupo sanguíneo`);
  }

}
