import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentSalePosterComponent } from './apartment-sale-poster.component';

describe('ApartmentSalePosterComponent', () => {
  let component: ApartmentSalePosterComponent;
  let fixture: ComponentFixture<ApartmentSalePosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentSalePosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentSalePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
