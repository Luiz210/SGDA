import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlimentoComponent } from './cadastro-alimento.component';

describe('CadastroAlimentoComponent', () => {
  let component: CadastroAlimentoComponent;
  let fixture: ComponentFixture<CadastroAlimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAlimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
