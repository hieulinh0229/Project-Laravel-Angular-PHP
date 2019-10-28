import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotRentDetailComponent } from './plot-rent-detail.component';

describe('PlotRentDetailComponent', () => {
  let component: PlotRentDetailComponent;
  let fixture: ComponentFixture<PlotRentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotRentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotRentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
