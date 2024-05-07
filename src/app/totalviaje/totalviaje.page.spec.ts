import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalviajePage } from './totalviaje.page';

describe('TotalviajePage', () => {
  let component: TotalviajePage;
  let fixture: ComponentFixture<TotalviajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
