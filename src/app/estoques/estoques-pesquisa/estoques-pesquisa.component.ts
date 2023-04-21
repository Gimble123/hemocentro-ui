import { Component, OnInit, ViewChild } from '@angular/core';
import { EstoqueFiltro, EstoquesService } from '../estoques.service';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';

@Component({
  selector: 'app-estoques-pesquisa',
  templateUrl: './estoques-pesquisa.component.html',
  styleUrls: ['./estoques-pesquisa.component.css']
})
export class EstoquesPesquisaComponent implements OnInit {

  filtro = new EstoqueFiltro();

  totalRegistros: number = 0

  estoques: any[] = [];
  @ViewChild('tabela') grid!: Table;
  jwtPayload: any;
  userId: any;

  constructor(
    private estoquesService: EstoquesService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private messageService: MessageService,
    private confirmation: ConfirmationService
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de estoques');
    this.userId = this.jwtPayload?.userId;
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.estoquesService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.estoques = resultado.estoques;

        this.totalRegistros = resultado.total;
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  confirmarExclusao(estoque: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(estoque);
      }
    });
  }

  excluir(estoque: any) {
    this.estoquesService.excluir(estoque.id)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.reset();
        }

        this.messageService.add({ severity: 'success', detail: 'Estoque excluído com sucesso!' })
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
