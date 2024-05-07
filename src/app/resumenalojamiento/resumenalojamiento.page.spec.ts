import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenalojamientoPage } from './resumenalojamiento.page';

describe('ResumenalojamientoPage', () => {
  let component: ResumenalojamientoPage;
  let fixture: ComponentFixture<ResumenalojamientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenalojamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
