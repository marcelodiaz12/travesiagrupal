import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenrestaurantesPage } from './resumenrestaurantes.page';

describe('ResumenrestaurantesPage', () => {
  let component: ResumenrestaurantesPage;
  let fixture: ComponentFixture<ResumenrestaurantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenrestaurantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
