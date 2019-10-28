import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApartmentSaleComponent } from './create-apartment-sale.component';

describe('CreateApartmentSaleComponent', () => {
  let component: CreateApartmentSaleComponent;
  let fixture: ComponentFixture<CreateApartmentSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateApartmentSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateApartmentSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
