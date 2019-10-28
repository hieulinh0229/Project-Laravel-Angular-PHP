import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlotRentComponent } from './create-plot-rent.component';

describe('CreatePlotRentComponent', () => {
  let component: CreatePlotRentComponent;
  let fixture: ComponentFixture<CreatePlotRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlotRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlotRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
