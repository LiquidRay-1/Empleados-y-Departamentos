import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarDepartamentoComponent } from './guardar-departamento.component';

describe('GuardarDepartamentoComponent', () => {
  let component: GuardarDepartamentoComponent;
  let fixture: ComponentFixture<GuardarDepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarDepartamentoComponent]
    });
    fixture = TestBed.createComponent(GuardarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
