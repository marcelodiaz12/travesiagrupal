import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestauranteseconomicosPage } from './restauranteseconomicos.page';

describe('RestauranteseconomicosPage', () => {
  let component: RestauranteseconomicosPage;
  let fixture: ComponentFixture<RestauranteseconomicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteseconomicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
