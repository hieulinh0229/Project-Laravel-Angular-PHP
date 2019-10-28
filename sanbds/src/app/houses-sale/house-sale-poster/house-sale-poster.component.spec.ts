import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSalePosterComponent } from './house-sale-poster.component';

describe('HouseSalePosterComponent', () => {
  let component: HouseSalePosterComponent;
  let fixture: ComponentFixture<HouseSalePosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseSalePosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseSalePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
