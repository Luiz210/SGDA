import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaComprovanteComponent } from './tela-comprovante.component';

describe('TelaComprovanteComponent', () => {
  let component: TelaComprovanteComponent;
  let fixture: ComponentFixture<TelaComprovanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaComprovanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaComprovanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
