import { Component, OnInit } from '@angular/core';
import { EstoquesService } from '../estoques.service';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Estoque } from 'src/app/core/model';

@Component({
  selector: 'app-estoques-atualizacao',
  templateUrl: './estoques-atualizacao.component.html',
  styleUrls: ['./estoques-atualizacao.component.css']
})
export class EstoquesAtualizacaoComponent implements OnInit {

  estoques: Estoque[] = [];

  constructor(
    private estoqueService: EstoquesService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService
  ) {
  }
  ngOnInit(): void {
    this.atualizarEstoques();
  }


  atualizarEstoques() {
    this.estoqueService.atualizar(this.estoques)
      .then(() => {
        //this.estoques = this.estoques;
        this.messageService.add({ severity: 'success', detail: 'Estoques atualizados com sucesso!' });
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }
}

