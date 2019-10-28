import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSaleUpdateComponent } from './house-sale-update.component';

describe('HouseSaleUpdateComponent', () => {
  let component: HouseSaleUpdateComponent;
  let fixture: ComponentFixture<HouseSaleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseSaleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseSaleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
