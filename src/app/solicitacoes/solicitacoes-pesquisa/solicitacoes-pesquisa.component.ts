import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { SolicitacaoFiltro, SolicitacoesService } from '../solicitacoes-service.service';

@Component({
  selector: 'app-solicitacoes-pesquisa',
  templateUrl: './solicitacoes-pesquisa.component.html',
  styleUrls: ['./solicitacoes-pesquisa.component.css']
})
export class SolicitacoesPesquisaComponent implements OnInit {

  filtro = new SolicitacaoFiltro();

  totalRegistros: number = 0

  solicitacoes: any[] = [];
  novoStatus: String = '';
  acao: String = '';
  @ViewChild('tabela') grid!: Table;
  jwtPayload: any;
  userId: any;

  constructor(
    private solicitacaoService: SolicitacoesService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private messageService: MessageService,
    private confirmation: ConfirmationService
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de solicitacoes');
    this.userId = this.jwtPayload?.userId;
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.solicitacaoService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.solicitacoes = resultado.solicitacoes;
        this.totalRegistros = resultado.total;

      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  aprovarSolicitacao(solicitacao: any) {

    this.solicitacaoService.aprovarSolicitacao(solicitacao.solicitacaoId, this.novoStatus)
      .then((response: any) => {

        this.acao = response.status;

        solicitacao.status = response.status;
        this.messageService.add({ severity: 'success', detail: `Solicitação ${this.acao} com sucesso!` });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  recusarSolicitacao(solicitacao: any) {
    this.solicitacaoService.recusarSolicitacao(solicitacao.solicitacaoId, this.novoStatus)
    .then((response: any) => {
      this.acao = response.status;

      solicitacao.status = response.status;
      this.messageService.add({ severity: 'success', detail: `Solicitação ${this.acao} com sucesso!` });
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(solicitacao: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(solicitacao);
      }
    });
  }

  excluir(solicitacao: any) {
    this.solicitacaoService.excluir(solicitacao.solicitacaoId)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.reset();
        }

        this.messageService.add({ severity: 'success', detail: 'Solicitação excluída com sucesso!' })
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
