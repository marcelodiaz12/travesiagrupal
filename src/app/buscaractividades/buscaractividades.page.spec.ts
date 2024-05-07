import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscaractividadesPage } from './buscaractividades.page';

describe('BuscaractividadesPage', () => {
  let component: BuscaractividadesPage;
  let fixture: ComponentFixture<BuscaractividadesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaractividadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
