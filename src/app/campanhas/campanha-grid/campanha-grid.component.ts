import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campanha-grid',
  templateUrl: './campanha-grid.component.html',
  styleUrls: ['./campanha-grid.component.css']
})
export class CampanhaGridComponent implements OnInit {

  @Input() campanhas:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
