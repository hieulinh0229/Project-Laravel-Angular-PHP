import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotSaleComponent } from './plot-sale.component';

describe('PlotSaleComponent', () => {
  let component: PlotSaleComponent;
  let fixture: ComponentFixture<PlotSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
