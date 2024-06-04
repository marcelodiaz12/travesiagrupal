import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueloPage } from './vuelo.page';

describe('VueloPage', () => {
  let component: VueloPage;
  let fixture: ComponentFixture<VueloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VueloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
