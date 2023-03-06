import { UsuarioFiltro, UsuarioService } from './../usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { AuthService } from 'src/app/seguranca/auth.service';
import { Title } from '@angular/platform-browser';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-usuarios-pesquisa',
  templateUrl: './usuarios-pesquisa.component.html',
  styleUrls: ['./usuarios-pesquisa.component.css']
})
export class UsuariosPesquisaComponent {

  filtro = new UsuarioFiltro();

  totalRegistros: number = 0

  usuarios: any[] = [];
  @ViewChild('tabela') grid!: Table;

  constructor(
    private usuarioService: UsuarioService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de usuários')
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.usuarioService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.usuarios = resultado.usuarios;
        this.totalRegistros = resultado.total;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  confirmarExclusao(grupo: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(grupo);
      }
    });
  }

  excluir(usuario: any) {

    this.usuarioService.excluir(usuario.id)
      .then(
        () => {
          this.grid.reset();

          this.messageService.add({ severity: 'success', detail: 'Usuário excluído com sucesso!' })
        }
      )
      .catch((error) => this.errorHandler.handle(error))

  }

}
