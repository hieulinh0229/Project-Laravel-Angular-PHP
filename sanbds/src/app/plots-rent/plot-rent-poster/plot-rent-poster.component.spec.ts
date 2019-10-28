import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotRentPosterComponent } from './plot-rent-poster.component';

describe('PlotRentPosterComponent', () => {
  let component: PlotRentPosterComponent;
  let fixture: ComponentFixture<PlotRentPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotRentPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotRentPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
