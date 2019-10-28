import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentRentUpdateComponent } from './apartment-rent-update.component';

describe('ApartmentRentUpdateComponent', () => {
  let component: ApartmentRentUpdateComponent;
  let fixture: ComponentFixture<ApartmentRentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentRentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentRentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
