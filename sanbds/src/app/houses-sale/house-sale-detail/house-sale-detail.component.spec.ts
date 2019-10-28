import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSaleDetailComponent } from './house-sale-detail.component';

describe('HouseSaleDetailComponent', () => {
  let component: HouseSaleDetailComponent;
  let fixture: ComponentFixture<HouseSaleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseSaleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseSaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
