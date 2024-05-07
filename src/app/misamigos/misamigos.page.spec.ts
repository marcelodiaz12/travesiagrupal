import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisamigosPage } from './misamigos.page';

describe('MisamigosPage', () => {
  let component: MisamigosPage;
  let fixture: ComponentFixture<MisamigosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisamigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
