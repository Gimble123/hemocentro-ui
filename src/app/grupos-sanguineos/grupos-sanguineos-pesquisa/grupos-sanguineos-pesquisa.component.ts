import { GrupoSanguineoService, GruposSanguineosFiltro } from './../grupo_sanguineo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';

@Component({
  selector: 'app-grupos-sanguineos-pesquisa',
  templateUrl: './grupos-sanguineos-pesquisa.component.html',
  styleUrls: ['./grupos-sanguineos-pesquisa.component.css']
})
export class GruposSanguineosPesquisaComponent implements OnInit {

  filtro = new GruposSanguineosFiltro();

  totalRegistros: number = 0

  grupos: any[] = [];
  @ViewChild('tabela') grid!: Table;

  constructor(
    private grupoSanguineoService: GrupoSanguineoService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private messageService: MessageService,
    private confirmation: ConfirmationService
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de grupos sanguíneos');
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.grupoSanguineoService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.grupos = resultado.grupos;
        this.totalRegistros = resultado.total;
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

}
