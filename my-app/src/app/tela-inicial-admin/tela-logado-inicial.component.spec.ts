import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLogadoInicialComponent } from './tela-logado-inicial.component';

describe('TelaLogadoInicialComponent', () => {
  let component: TelaLogadoInicialComponent;
  let fixture: ComponentFixture<TelaLogadoInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaLogadoInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaLogadoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
