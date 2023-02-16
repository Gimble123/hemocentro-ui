import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AgendamentoFiltro, AgendamentoService } from '../agendamento.service';

@Component({
  selector: 'app-agendamentos-pesquisa',
  templateUrl: './agendamentos-pesquisa.component.html',
  styleUrls: ['./agendamentos-pesquisa.component.css']
})
export class AgendamentosPesquisaComponent {

  filtro = new AgendamentoFiltro();

  totalRegistros: number = 0

  agendamentos: any[] = [];
  @ViewChild('tabela') grid!: Table;
  jwtPayload: any;
  userId: any;

  constructor(
    private agendamentoService: AgendamentoService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private messageService: MessageService,
    private confirmation: ConfirmationService
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de agendamentos');
    this.userId = this.jwtPayload?.userId;
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    console.log('Pesquisar')

    this.agendamentoService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.agendamentos = resultado.agendamentos;
        this.totalRegistros = resultado.total;

      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  confirmarExclusao(solicitacao: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(solicitacao);
      }
    });
  }

  excluir(agendamento: any) {
    this.agendamentoService.excluir(agendamento.id)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.reset();
        }

        this.messageService.add({ severity: 'success', detail: 'Agendamento excluída com sucesso!' })
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
