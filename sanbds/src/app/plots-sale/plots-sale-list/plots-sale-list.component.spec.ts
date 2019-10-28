import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotsSaleListComponent } from './plots-sale-list.component';

describe('PlotsSaleListComponent', () => {
  let component: PlotsSaleListComponent;
  let fixture: ComponentFixture<PlotsSaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotsSaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotsSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
