import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaRentPosterComponent } from './villa-rent-poster.component';

describe('VillaRentPosterComponent', () => {
  let component: VillaRentPosterComponent;
  let fixture: ComponentFixture<VillaRentPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaRentPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaRentPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
