import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ByRegionPage } from './by-region.page';

describe('ByRegionPage', () => {
  let component: ByRegionPage;
  let fixture: ComponentFixture<ByRegionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ByRegionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
