import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesSaleListComponent } from './houses-sale-list.component';

describe('HousesSaleListComponent', () => {
  let component: HousesSaleListComponent;
  let fixture: ComponentFixture<HousesSaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesSaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
