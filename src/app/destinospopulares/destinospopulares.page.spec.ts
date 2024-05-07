import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinospopularesPage } from './destinospopulares.page';

describe('DestinospopularesPage', () => {
  let component: DestinospopularesPage;
  let fixture: ComponentFixture<DestinospopularesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinospopularesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
