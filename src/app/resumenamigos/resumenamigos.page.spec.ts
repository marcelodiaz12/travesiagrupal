import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenamigosPage } from './resumenamigos.page';

describe('ResumenamigosPage', () => {
  let component: ResumenamigosPage;
  let fixture: ComponentFixture<ResumenamigosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenamigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
