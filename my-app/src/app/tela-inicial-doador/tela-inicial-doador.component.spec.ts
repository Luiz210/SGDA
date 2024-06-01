import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialDoadorComponent } from './tela-inicial-doador.component';

describe('TelaInicialDoadorComponent', () => {
  let component: TelaInicialDoadorComponent;
  let fixture: ComponentFixture<TelaInicialDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaInicialDoadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInicialDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
