import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentPosterComponent } from './apartment-poster.component';

describe('ApartmentPosterComponent', () => {
  let component: ApartmentPosterComponent;
  let fixture: ComponentFixture<ApartmentPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
