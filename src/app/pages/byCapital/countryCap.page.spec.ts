import { ComponentFixture, TestBed } from '@angular/core/testing';
import { countryCapPage } from './countryCappage';

describe('countryCapPage', () => {
  let component: countryCapPage;
  let fixture: ComponentFixture<countryCapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(countryCapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
