import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { DoacaoFiltro, DoacaoService } from '../doacao.service';

@Component({
  selector: 'app-doacoes-pesquisa',
  templateUrl: './doacoes-pesquisa.component.html',
  styleUrls: ['./doacoes-pesquisa.component.css']
})
export class DoacoesPesquisaComponent implements OnInit {

  filtro = new DoacaoFiltro();

  totalRegistros: number = 0

  doacoes: any[] = [];
  @ViewChild('tabela') grid!: Table;

  constructor(
    private doacaoService: DoacaoService,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de doações');
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.doacaoService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.doacoes = resultado.doacoes;

        this.doacoes.filter((e) => {
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

}
