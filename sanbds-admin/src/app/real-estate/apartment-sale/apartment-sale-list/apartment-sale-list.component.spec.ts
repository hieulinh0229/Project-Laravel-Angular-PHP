import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentSaleListComponent } from './apartment-sale-list.component';

describe('ApartmentSaleListComponent', () => {
  let component: ApartmentSaleListComponent;
  let fixture: ComponentFixture<ApartmentSaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentSaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
