import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotSaleUpdateComponent } from './plot-sale-update.component';

describe('PlotSaleUpdateComponent', () => {
  let component: PlotSaleUpdateComponent;
  let fixture: ComponentFixture<PlotSaleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotSaleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotSaleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
