import { GrupoSanguineoService } from '../../grupos-sanguineos/grupo-sanguineo.service';
import { CampanhaService } from './../campanha.service';
import { Campanha } from './../../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-campanha-cadastro',
  templateUrl: './campanha-cadastro.component.html',
  styleUrls: ['./campanha-cadastro.component.css']
})
export class CampanhaCadastroComponent implements OnInit {

  campanha = new Campanha();
  grupoSanguineo: any[] = [];
  dataInicial: string = '';
  dataFinal: string = '';

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
          this.campanha = campanha

          var dataInicial = new Date(campanha.dataInicial!);

          var dataFinal = new Date(campanha.dataFinal!);

          console.log('campanha.dataInicial: ', this.campanha.dataInicial)
          console.log('dataInicial: ', dataInicial)
          console.log('campanha.dataFinal: ', this.campanha.dataFinal)
          console.log('dataFinal: ', dataFinal)

          if (this.campanha.dataInicial != dataInicial && this.campanha.dataFinal != dataFinal) {
            dataInicial.setDate(dataInicial.getDate() + 1)
            this.campanha.dataInicial = new Date(dataInicial);
            //dataFinal.setDate(dataFinal.getDate() + 1)
            this.campanha.dataFinal = new Date(dataFinal);
          }

          console.log('Campanha carregada: ', campanha)

          this.atualizarTituloEdicao()
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarCampanha(form);
    } else {
      this.adicionarCampanha(form);
    }
  }

  adicionarCampanha(form: NgForm) {
    this.campanhaService.adicionar(this.campanha)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Campanha adicionada com sucesso!' });

        this.router.navigate(['campanhas']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarCampanha(form: NgForm) {

    console.log('Atualização: ', this.campanha);

    this.campanhaService.atualizar(this.campanha)
      .then(() => {

        this.messageService.add({ severity: 'success', detail: 'Campanha alterada com sucesso!' });

        this.router.navigate(['campanhas']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de campanha`);
  }

}
