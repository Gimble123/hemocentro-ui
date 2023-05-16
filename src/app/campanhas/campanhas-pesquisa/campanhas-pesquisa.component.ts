import { CampanhaFiltro, CampanhaService } from './../campanha.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';

@Component({
  selector: 'app-campanhas-pesquisa',
  templateUrl: './campanhas-pesquisa.component.html',
  styleUrls: ['./campanhas-pesquisa.component.css']
})
export class CampanhasPesquisaComponent implements OnInit {

  filtro = new CampanhaFiltro();

  totalRegistros: number = 0

  campanhas: any[] = [];
  @ViewChild('tabela') grid!: Table;
  jwtPayload: any;
  userId: any;

  constructor(
    private campanhaService: CampanhaService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private messageService: MessageService,
    private confirmation: ConfirmationService
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de campanhas');
    this.userId = this.jwtPayload?.userId;
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.campanhaService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.campanhas = resultado.campanhas;

        this.campanhas.filter((e) => {
          var t = new Date(e.dataInicial)
          e.dataInicial = t.setDate(t.getDate() + 1)
          var t = new Date(e.dataFinal)
          e.dataFinal = t.setDate(t.getDate() + 1)
        })

        this.totalRegistros = resultado.total;
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  confirmarExclusao(campanha: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(campanha);
      }
    });
  }

  excluir(campanha: any) {
    this.campanhaService.excluir(campanha.campanhaId)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.reset();
        }

        this.messageService.add({ severity: 'success', detail: 'Campanha excluída com sucesso!' })
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
