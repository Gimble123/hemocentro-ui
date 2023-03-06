import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { DoacaoFiltro, DoacaoUsuarioService } from '../doacao-usuario.service';

@Component({
  selector: 'app-doacoes-usuario-pesquisa',
  templateUrl: './doacoes-usuario-pesquisa.component.html',
  styleUrls: ['./doacoes-usuario-pesquisa.component.css']
})
export class DoacoesUsuarioPesquisaComponent implements OnInit {

  filtro = new DoacaoFiltro();

  totalRegistros: number = 0

  doacoes: any[] = [];
  @ViewChild('tabela') grid!: Table;

  constructor(
    private doacaoUsuarioService: DoacaoUsuarioService,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de doações');
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.doacaoUsuarioService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.doacoes = resultado.doacoes;
        this.totalRegistros = resultado.total;
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

}
