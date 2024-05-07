import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerificardisponibilidadPage } from './verificardisponibilidad.page';

describe('VerificardisponibilidadPage', () => {
  let component: VerificardisponibilidadPage;
  let fixture: ComponentFixture<VerificardisponibilidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificardisponibilidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
