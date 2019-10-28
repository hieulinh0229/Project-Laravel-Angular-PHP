import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlotRentComponent } from './update-plot-rent.component';

describe('UpdatePlotRentComponent', () => {
  let component: UpdatePlotRentComponent;
  let fixture: ComponentFixture<UpdatePlotRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePlotRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlotRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
