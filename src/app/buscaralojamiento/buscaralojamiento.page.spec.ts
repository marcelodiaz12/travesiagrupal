import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscaralojamientoPage } from './buscaralojamiento.page';

describe('BuscaralojamientoPage', () => {
  let component: BuscaralojamientoPage;
  let fixture: ComponentFixture<BuscaralojamientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaralojamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
