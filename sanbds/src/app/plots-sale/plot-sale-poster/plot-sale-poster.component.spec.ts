import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotSalePosterComponent } from './plot-sale-poster.component';

describe('PlotSalePosterComponent', () => {
  let component: PlotSalePosterComponent;
  let fixture: ComponentFixture<PlotSalePosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotSalePosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotSalePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
