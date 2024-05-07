import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VuelosenofertaPage } from './vuelosenoferta.page';

describe('VuelosenofertaPage', () => {
  let component: VuelosenofertaPage;
  let fixture: ComponentFixture<VuelosenofertaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VuelosenofertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
