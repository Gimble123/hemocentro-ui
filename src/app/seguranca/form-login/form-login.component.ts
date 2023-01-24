import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  jwtPayload: any;
  flag: boolean = true;

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) {
    this.auth.carregarToken();
  }

  ngOnInit(): void {
  }

  login(usuario: string, senha: string) {

    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }

}
