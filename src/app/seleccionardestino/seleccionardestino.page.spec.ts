import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionardestinoPage } from './seleccionardestino.page';

describe('SeleccionardestinoPage', () => {
  let component: SeleccionardestinoPage;
  let fixture: ComponentFixture<SeleccionardestinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionardestinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
