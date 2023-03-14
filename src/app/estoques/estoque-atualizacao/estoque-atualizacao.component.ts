import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../estoque.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-estoque-atualizacao',
  templateUrl: './estoque-atualizacao.component.html',
  styleUrls: ['./estoque-atualizacao.component.css']
})
export class EstoqueAtualizacaoComponent implements OnInit {

  allStatus: any[] = [];
  estoques: any[] = [];
  status: any[] = [];

  constructor(
    private estoqueService: EstoqueService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService
  ) {
  }

  ngOnInit(): void {
    this.listarStatus();
    this.carregarStatus();
  }

  listarStatus() {
    return this.estoqueService.listarStatus()
      .then(status => {
        this.allStatus = status
          .map((s: any) => ({ label: s }))

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarStatus() {
    return this.estoqueService.carregarStatus()
      .then(status => {
        this.status = status
        console.log(status);
      })

      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarEstoques() {
    console.log('Chamou o método atualizar do componente ',  this.estoques.map(e => {
      e.status
    }))
    this.estoqueService.atualizar(this.estoques)
      .then((estoque) => {
        this.estoques = estoque;
        this.messageService.add({ severity: 'success', detail: 'Estoques atualizados com sucesso!' });

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
