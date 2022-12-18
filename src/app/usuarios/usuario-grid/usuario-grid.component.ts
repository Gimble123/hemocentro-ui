import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-grid',
  templateUrl: './usuario-grid.component.html',
  styleUrls: ['./usuario-grid.component.css']
})
export class UsuarioGridComponent implements OnInit {

  @Input() usuarios:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
