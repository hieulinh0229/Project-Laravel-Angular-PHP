import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotRentUpdateComponent } from './plot-rent-update.component';

describe('PlotRentUpdateComponent', () => {
  let component: PlotRentUpdateComponent;
  let fixture: ComponentFixture<PlotRentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotRentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotRentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
