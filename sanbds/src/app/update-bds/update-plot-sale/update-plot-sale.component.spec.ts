import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlotSaleComponent } from './update-plot-sale.component';

describe('UpdatePlotSaleComponent', () => {
  let component: UpdatePlotSaleComponent;
  let fixture: ComponentFixture<UpdatePlotSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePlotSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlotSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
