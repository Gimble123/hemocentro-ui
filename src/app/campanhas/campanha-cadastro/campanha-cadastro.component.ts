import { GrupoSanguineoService } from './../../grupos-sanguineos/grupo_sanguineo.service';
import { CampanhaService } from './../campanha.service';
import { Campanha } from './../../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-campanha-cadastro',
  templateUrl: './campanha-cadastro.component.html',
  styleUrls: ['./campanha-cadastro.component.css']
})
export class CampanhaCadastroComponent implements OnInit {

  campanha = new Campanha();
  grupoSanguineo: any[] = [];


  constructor(
    private campanhaService: CampanhaService,
    private grupoSanguineoService: GrupoSanguineoService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit() {
    this.carregarGrupoSanguineoSemPaginacao();
    const idCampanha = this.route.snapshot.params['id'];

    this.title.setTitle('Nova campanha');

    if (idCampanha && idCampanha !== 'nova') {
      this.carregarCampanha(idCampanha);
    }
  }

  carregarGrupoSanguineoSemPaginacao() {
    this.grupoSanguineoService.listarTodosSemPaginacao()
      .then(grupoSanguineo => {
        this.grupoSanguineo = grupoSanguineo.map((g: any) => ({ label: g.nome, value: g.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.campanha.id)
  }

  carregarCampanha(id: number) {
    this.campanhaService.buscarPorCodigo(id)
      .then((campanha: Campanha) => {
        console.log('Campanha carregada', campanha)
        this.campanha = campanha
        this.atualizarTituloEdicao()
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  salvar() {
    if (this.editando) {
      this.atualizarCampanha();
    } else {
      this.adicionarCampanha();
    }
  }

  adicionarCampanha() {
    this.campanhaService.adicionar(this.campanha)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Campanha adicionada com sucesso!' });

        this.router.navigate(['campanhas']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarCampanha() {
    this.campanhaService.atualizar(this.campanha)
      .then(campanha => {
        this.campanha = campanha;

        this.messageService.add({ severity: 'success', detail: 'Campanha alterada com sucesso!' });
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de campanha: ${this.campanha.nome}`);
  }

}
