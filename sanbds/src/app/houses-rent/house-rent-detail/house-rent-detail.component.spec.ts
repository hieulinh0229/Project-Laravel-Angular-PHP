import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRentDetailComponent } from './house-rent-detail.component';

describe('HouseRentDetailComponent', () => {
  let component: HouseRentDetailComponent;
  let fixture: ComponentFixture<HouseRentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
