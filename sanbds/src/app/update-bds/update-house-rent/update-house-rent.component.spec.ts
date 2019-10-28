import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHouseRentComponent } from './update-house-rent.component';

describe('UpdateHouseRentComponent', () => {
  let component: UpdateHouseRentComponent;
  let fixture: ComponentFixture<UpdateHouseRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHouseRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHouseRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
