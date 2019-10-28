import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentRentListComponent } from './apartment-rent-list.component';

describe('ApartmentRentListComponent', () => {
  let component: ApartmentRentListComponent;
  let fixture: ComponentFixture<ApartmentRentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentRentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentRentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
