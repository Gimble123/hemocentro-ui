import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-senha',
  templateUrl: './reset-senha.component.html',
  styleUrls: ['./reset-senha.component.css']
})
export class ResetSenhaComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  recuperar(usuario: string) {
    console.log('arquivo component', usuario)
    this.auth.recuperar(usuario);
  }

}
