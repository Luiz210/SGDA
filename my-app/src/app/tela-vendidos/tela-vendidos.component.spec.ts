import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaVendidosComponent } from './tela-vendidos.component';

describe('TelaVendidosComponent', () => {
  let component: TelaVendidosComponent;
  let fixture: ComponentFixture<TelaVendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaVendidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
