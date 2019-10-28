import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApartmentSaleComponent } from './update-apartment-sale.component';

describe('UpdateApartmentSaleComponent', () => {
  let component: UpdateApartmentSaleComponent;
  let fixture: ComponentFixture<UpdateApartmentSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateApartmentSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApartmentSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
