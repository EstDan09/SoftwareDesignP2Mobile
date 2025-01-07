import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ByNamePage } from './by-name.page';

describe('ByNamePage', () => {
  let component: ByNamePage;
  let fixture: ComponentFixture<ByNamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ByNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
