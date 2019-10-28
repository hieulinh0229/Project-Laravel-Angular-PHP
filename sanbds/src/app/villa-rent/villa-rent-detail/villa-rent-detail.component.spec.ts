import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaRentDetailComponent } from './villa-rent-detail.component';

describe('VillaRentDetailComponent', () => {
  let component: VillaRentDetailComponent;
  let fixture: ComponentFixture<VillaRentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaRentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaRentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
