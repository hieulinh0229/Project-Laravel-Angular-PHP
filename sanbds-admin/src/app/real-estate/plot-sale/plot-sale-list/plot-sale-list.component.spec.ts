import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotSaleListComponent } from './plot-sale-list.component';

describe('PlotSaleListComponent', () => {
  let component: PlotSaleListComponent;
  let fixture: ComponentFixture<PlotSaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotSaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
