import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSaleListComponent } from './house-sale-list.component';

describe('HouseSaleListComponent', () => {
  let component: HouseSaleListComponent;
  let fixture: ComponentFixture<HouseSaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseSaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
