import { ComponentFixture, TestBed } from '@angular/core/testing';
import { countryDetailsPage } from './countryDetails.page';

describe('MovieDetailsPage', () => {
  let component: countryDetailsPage;
  let fixture: ComponentFixture<countryDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(countryDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
