import { CampanhaFiltro, CampanhaUsuarioService } from '../campanha-usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-campanhas-usuario-pesquisa',
  templateUrl: './campanhas-usuario-pesquisa.component.html',
  styleUrls: ['./campanhas-usuario-pesquisa.component.css']
})
export class CampanhasUsuarioPesquisaComponent implements OnInit {

  filtro = new CampanhaFiltro();

  totalRegistros: number = 0

  campanhasUsuarios: any[] = [];
  @ViewChild('tabela') grid!: Table;
  jwtPayload: any;
  userId: any;

  constructor(
    private campanhaService: CampanhaUsuarioService,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de campanhas');
    this.userId = this.jwtPayload?.userId;
  }

  pesquisarCampanhasUsuario(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.campanhaService.pesquisarCampanhasUsuario(this.filtro)
      .then((resultado: any) => {
        this.campanhasUsuarios = resultado.campanhas;
        this.totalRegistros = resultado.total;
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisarCampanhasUsuario(pagina);
  }
}
