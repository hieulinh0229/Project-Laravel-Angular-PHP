import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRentUpdateComponent } from './house-rent-update.component';

describe('HouseRentUpdateComponent', () => {
  let component: HouseRentUpdateComponent;
  let fixture: ComponentFixture<HouseRentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
