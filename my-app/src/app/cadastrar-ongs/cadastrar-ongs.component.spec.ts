import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOngsComponent } from './cadastrar-ongs.component';

describe('CadastrarOngsComponent', () => {
  let component: CadastrarOngsComponent;
  let fixture: ComponentFixture<CadastrarOngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarOngsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
