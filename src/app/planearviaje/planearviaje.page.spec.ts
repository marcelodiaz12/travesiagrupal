import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanearviajePage } from './planearviaje.page';

describe('PlanearviajePage', () => {
  let component: PlanearviajePage;
  let fixture: ComponentFixture<PlanearviajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanearviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
