import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotSaleDetailComponent } from './plot-sale-detail.component';

describe('PlotSaleDetailComponent', () => {
  let component: PlotSaleDetailComponent;
  let fixture: ComponentFixture<PlotSaleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotSaleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotSaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
