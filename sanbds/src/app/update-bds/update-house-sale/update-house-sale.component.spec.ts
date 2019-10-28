import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHouseSaleComponent } from './update-house-sale.component';

describe('UpdateHouseSaleComponent', () => {
  let component: UpdateHouseSaleComponent;
  let fixture: ComponentFixture<UpdateHouseSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHouseSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHouseSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
