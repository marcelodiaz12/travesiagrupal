import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenvuelosPage } from './resumenvuelos.page';

describe('ResumenvuelosPage', () => {
  let component: ResumenvuelosPage;
  let fixture: ComponentFixture<ResumenvuelosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenvuelosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
