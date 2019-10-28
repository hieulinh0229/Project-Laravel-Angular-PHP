import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmenSaleDetailComponent } from './apartmen-sale-detail.component';

describe('ApartmenSaleDetailComponent', () => {
  let component: ApartmenSaleDetailComponent;
  let fixture: ComponentFixture<ApartmenSaleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmenSaleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmenSaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
