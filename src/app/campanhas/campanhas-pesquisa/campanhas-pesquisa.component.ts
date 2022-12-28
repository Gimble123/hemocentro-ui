import { CampanhaFiltro, CampanhaService } from './../campanha.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-campanhas-pesquisa',
  templateUrl: './campanhas-pesquisa.component.html',
  styleUrls: ['./campanhas-pesquisa.component.css']
})
export class CampanhasPesquisaComponent {

  filtro = new CampanhaFiltro();

  totalRegistros: number = 0

  campanhas: any[] = [];
  @ViewChild('tabela') grid!: Table;

  constructor(
    private campanhaService: CampanhaService,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de lançamentos');
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.campanhaService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.campanhas = resultado.campanhas;
        this.totalRegistros = resultado.total;
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  // ngOnInit() {
  //   this.title.setTitle('Pesquisa de lançamentos');
  // }

  // pesquisar(pagina: number = 0): void {
  //   this.filtro.pagina = pagina;

  //   this.lancamentoService.pesquisar(this.filtro)
  //     .then((resultado: any) => {
  //       this.lancamentos = resultado.lancamentos;
  //       this.totalRegistros = resultado.total;
  //     })
  //     .catch(erro => this.errorHandler.handle(erro));

  // }

  // aoMudarPagina(event: LazyLoadEvent) {
  //   const pagina = event!.first! / event!.rows!;
  //   this.pesquisar(pagina);
  // }

  // confirmarExclusao(lancamento: any) {
  //   this.confirmation.confirm({
  //     message: 'Tem certeza que deseja excluir?',
  //     accept: () => {
  //       this.excluir(lancamento);
  //     }
  //   });
  // }

  // excluir(lancamento: any) {
  //   this.lancamentoService.excluir(lancamento.codigo)
  //     .then(() => {
  //       if (this.grid.first === 0) {
  //         this.pesquisar();
  //       } else {
  //         this.grid.reset();
  //       }

  //       this.messageService.add({ severity: 'success', detail: 'Lançamento excluído com sucesso!' })
  //     })
  //     .catch(erro => this.errorHandler.handle(erro));
  // }


}
