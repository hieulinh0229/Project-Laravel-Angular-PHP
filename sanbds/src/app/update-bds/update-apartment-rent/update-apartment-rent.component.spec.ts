import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApartmentRentComponent } from './update-apartment-rent.component';

describe('UpdateApartmentRentComponent', () => {
  let component: UpdateApartmentRentComponent;
  let fixture: ComponentFixture<UpdateApartmentRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateApartmentRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApartmentRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
