import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaRentComponent } from './villa-rent.component';

describe('VillaRentComponent', () => {
  let component: VillaRentComponent;
  let fixture: ComponentFixture<VillaRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
