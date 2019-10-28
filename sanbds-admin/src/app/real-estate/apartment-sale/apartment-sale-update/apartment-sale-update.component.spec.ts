import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentSaleUpdateComponent } from './apartment-sale-update.component';

describe('ApartmentSaleUpdateComponent', () => {
  let component: ApartmentSaleUpdateComponent;
  let fixture: ComponentFixture<ApartmentSaleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentSaleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentSaleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
