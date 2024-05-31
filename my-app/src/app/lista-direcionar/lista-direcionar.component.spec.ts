import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDirecionarComponent } from './lista-direcionar.component';

describe('ListaDirecionarComponent', () => {
  let component: ListaDirecionarComponent;
  let fixture: ComponentFixture<ListaDirecionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDirecionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDirecionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
