import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRentPosterComponent } from './house-rent-poster.component';

describe('HouseRentPosterComponent', () => {
  let component: HouseRentPosterComponent;
  let fixture: ComponentFixture<HouseRentPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRentPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRentPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
