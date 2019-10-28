import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApartmentRentComponent } from './create-apartment-rent.component';

describe('CreateApartmentRentComponent', () => {
  let component: CreateApartmentRentComponent;
  let fixture: ComponentFixture<CreateApartmentRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateApartmentRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateApartmentRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
