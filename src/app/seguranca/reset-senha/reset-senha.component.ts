import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-senha',
  templateUrl: './reset-senha.component.html',
  styleUrls: ['./reset-senha.component.css']
})
export class ResetSenhaComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  recuperar(email: String) {
    this.auth.recuperar(email);
    this.messageService.add({ severity: 'success', detail: 'Nova senha enviada para seu email!' })
  }
}
