import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlotSaleComponent } from './create-plot-sale.component';

describe('CreatePlotSaleComponent', () => {
  let component: CreatePlotSaleComponent;
  let fixture: ComponentFixture<CreatePlotSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlotSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlotSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
