import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentRentPosterComponent } from './apartment-rent-poster.component';

describe('ApartmentRentPosterComponent', () => {
  let component: ApartmentRentPosterComponent;
  let fixture: ComponentFixture<ApartmentRentPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentRentPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentRentPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
