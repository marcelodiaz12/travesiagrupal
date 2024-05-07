import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenactividadesPage } from './resumenactividades.page';

describe('ResumenactividadesPage', () => {
  let component: ResumenactividadesPage;
  let fixture: ComponentFixture<ResumenactividadesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenactividadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
