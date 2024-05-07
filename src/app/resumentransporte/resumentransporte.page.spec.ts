import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumentransportePage } from './resumentransporte.page';

describe('ResumentransportePage', () => {
  let component: ResumentransportePage;
  let fixture: ComponentFixture<ResumentransportePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumentransportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
