import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotRentListComponent } from './plot-rent-list.component';

describe('PlotRentListComponent', () => {
  let component: PlotRentListComponent;
  let fixture: ComponentFixture<PlotRentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotRentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotRentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
