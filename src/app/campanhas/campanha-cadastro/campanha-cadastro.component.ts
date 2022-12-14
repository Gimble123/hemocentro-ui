import { GrupoSanguineoService } from './../../grupos-sanguineos/grupo_sanguineo.service';
import { CampanhaService } from './../campanha.service';
import { Campanha } from './../../core/model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-campanha-cadastro',
  templateUrl: './campanha-cadastro.component.html',
  styleUrls: ['./campanha-cadastro.component.css']
})
export class CampanhaCadastroComponent implements OnInit {
  grupoSanguineo: any[] = [];
  campanha = new Campanha();

  constructor(
    private campanhaService: CampanhaService,
    private grupoSanguineoService: GrupoSanguineoService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit(): void {
    const idCampanha = this.route.snapshot.params['codigo'];

    this.title.setTitle('Nova campanha');

    this.carregarGrupoSanguineo();
  }

  adicionarCampanha(form: NgForm) {
    this.campanhaService.adicionar(this.campanha)
      .then(campanhaAdicionada => {
        this.messageService.add({ severity: 'success', detail: 'Campanha adicionado com sucesso!' });
        this.router.navigate(['/campanhas', campanhaAdicionada.id]);

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarGrupoSanguineo() {
    this.grupoSanguineoService.listarTodas()
      .then(grupoSanguineo => {
        this.grupoSanguineo = grupoSanguineo.map((g: any) => ({ label: g.nome, value: g.id }));

      })
      .catch(erro => this.errorHandler.handle(erro));
}

}
