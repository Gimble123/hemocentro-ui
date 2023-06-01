import { AuthService } from 'src/app/seguranca/auth.service';
import { AgendamentoService } from './../agendamento.service';
import { Agendamento, AgendamentoInput } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-agendamento-cadastro',
  templateUrl: './agendamento-cadastro.component.html',
  styleUrls: ['./agendamento-cadastro.component.css']
})
export class AgendamentoCadastroComponent implements OnInit {

  idUsuarioLogado: any;
  agendamentoInput = new AgendamentoInput();

  constructor(
    private agendamentoService: AgendamentoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private auth: AuthService
  ) {
    this.idUsuarioLogado = this.auth.jwtPayload?.userId;
  }

  ngOnInit() {
    const idAgendamento = this.route.snapshot.params['id'];


    this.title.setTitle('Novo agendamento');

    if (idAgendamento && idAgendamento !== 'novo') {
      this.carregarAgendamento(idAgendamento);
    }
  }

  carregarAgendamento(id: number) {
    this.agendamentoService.buscarPorCodigo(id)
      .then((agendamento: Agendamento) => {
        this.agendamentoInput = agendamento
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.agendamentoInput.agendamentoId)
  }

  salvar() {
    if (this.editando) {
      this.atualizarAgendamento();
    } else {
      this.adicionarAgendamento();
    }
  }

  adicionarAgendamento() {

    let agendamento = {
        "agendamentoId": this.agendamentoInput.agendamentoId,
        "dataAgendamento": this.agendamentoInput.dataAgendamento,
        "usuarioId": this.idUsuarioLogado
    }

    this.agendamentoService.adicionar(agendamento)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Agendamento adicionado com sucesso!' });

        this.router.navigate(['agendamentos']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarAgendamento() {
    this.agendamentoService.atualizar(this.agendamentoInput)
      .then(agendamento => {
        this.agendamentoInput = agendamento;

        this.messageService.add({ severity: 'success', detail: 'Agendamento alterado com sucesso!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
