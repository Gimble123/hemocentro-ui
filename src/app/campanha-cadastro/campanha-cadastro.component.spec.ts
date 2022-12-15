import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaCadastroComponent } from './campanha-cadastro.component';

describe('CampanhaCadastroComponent', () => {
  let component: CampanhaCadastroComponent;
  let fixture: ComponentFixture<CampanhaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampanhaCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampanhaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
