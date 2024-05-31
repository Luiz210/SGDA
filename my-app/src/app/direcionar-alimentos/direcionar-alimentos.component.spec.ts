import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecionarAlimentosComponent } from './direcionar-alimentos.component';

describe('DirecionarAlimentosComponent', () => {
  let component: DirecionarAlimentosComponent;
  let fixture: ComponentFixture<DirecionarAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirecionarAlimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirecionarAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
