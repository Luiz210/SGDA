import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDoacaoComponent } from './tela-doacao.component';

describe('TelaDoacaoComponent', () => {
  let component: TelaDoacaoComponent;
  let fixture: ComponentFixture<TelaDoacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaDoacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
