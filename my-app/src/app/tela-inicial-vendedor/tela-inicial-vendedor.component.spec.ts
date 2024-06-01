import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialVendedorComponent } from './tela-inicial-vendedor.component';

describe('TelaInicialVendedorComponent', () => {
  let component: TelaInicialVendedorComponent;
  let fixture: ComponentFixture<TelaInicialVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaInicialVendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInicialVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
