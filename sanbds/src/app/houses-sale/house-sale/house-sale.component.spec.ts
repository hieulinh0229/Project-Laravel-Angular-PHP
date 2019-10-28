import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSaleComponent } from './house-sale.component';

describe('HouseSaleComponent', () => {
  let component: HouseSaleComponent;
  let fixture: ComponentFixture<HouseSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
