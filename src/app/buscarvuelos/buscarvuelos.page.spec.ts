import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarvuelosPage } from './buscarvuelos.page';

describe('BuscarvuelosPage', () => {
  let component: BuscarvuelosPage;
  let fixture: ComponentFixture<BuscarvuelosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarvuelosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
