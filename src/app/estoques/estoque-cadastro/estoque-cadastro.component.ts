import { Component, OnInit } from '@angular/core';
import { Estoque } from 'src/app/core/model';
import { EstoquesService } from '../estoques.service';
import { GrupoSanguineoService } from 'src/app/grupos-sanguineos/grupo-sanguineo.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { StatusService } from 'src/app/status/status.service';

@Component({
  selector: 'app-estoque-cadastro',
  templateUrl: './estoque-cadastro.component.html',
  styleUrls: ['./estoque-cadastro.component.css']
})
export class EstoqueCadastroComponent implements OnInit {

  estoque = new Estoque();
  statusEstoque: any[] = [];
  grupoSanguineo: any[] = [];
  dataAtualizacao = new Date();;

  constructor(
    private estoqueService: EstoquesService,
    private grupoSanguineoService: GrupoSanguineoService,
    private statusService: StatusService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit() {
    this.carregarGrupoSanguineoSemPaginacao();
    this.carregarStatusEstoqueSemPaginacao();
    const idEstoque = this.route.snapshot.params['id'];

    this.title.setTitle('Novo estoque');

    if (idEstoque && idEstoque !== 'novo') {
      this.carregarEstoque(idEstoque);
    }
  }

  carregarGrupoSanguineoSemPaginacao() {
    this.grupoSanguineoService.listarTodosSemPaginacao()
      .then(grupoSanguineo => {
        this.grupoSanguineo = grupoSanguineo.map((g: any) => ({ label: g.nome, value: g.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarStatusEstoqueSemPaginacao() {
    this.statusService.listarTodos()
      .then(status => {
        this.statusEstoque = status.map((s: any) => ({ label: s.status, value: s.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.estoque.id)
  }

  carregarEstoque(id: number) {
    this.estoqueService.buscarPorCodigo(id)
      .then((estoque: Estoque) => {
          this.estoque = estoque

          var data = new Date(estoque.data!);

          data.setDate(data.getDate() + 1)

          this.estoque.data = new Date(data);

          this.dataAtualizacao = this.estoque.data

          this.atualizarTituloEdicao()
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  salvar() {
    if (this.editando) {
      this.atualizarEstoque();
    } else {
      this.adicionarEstoque();
    }
  }

  adicionarEstoque() {
    this.estoqueService.adicionar(this.estoque)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Estoque adicionado com sucesso!' });

        this.router.navigate(['estoques']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarEstoque() {

    if (this.dataAtualizacao == this.estoque.data) { this.estoque.data!.setDate(this.estoque.data!.getDate() - 1)}

    this.estoqueService.atualizar(this.estoque)
      .then(() => {

        this.messageService.add({ severity: 'success', detail: 'Estoque alterado com sucesso!' });

        this.router.navigate(['estoques']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de estoque`);
  }

}
