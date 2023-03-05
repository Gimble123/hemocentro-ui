import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EstoqueService } from '../estoque.service';

@Component({
  selector: 'app-estoque-atualizacao',
  templateUrl: './estoque-atualizacao.component.html',
  styleUrls: ['./estoque-atualizacao.component.css']
})
export class EstoqueAtualizacaoComponent implements OnInit {

  constructor(
    private estoqueService: EstoqueService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private title: Title
  ) { }

  ngOnInit(): void {
    console.log('Componente estoque atualização')
  }

}
