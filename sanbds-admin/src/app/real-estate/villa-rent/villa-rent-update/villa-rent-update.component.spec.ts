import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaRentUpdateComponent } from './villa-rent-update.component';

describe('VillaRentUpdateComponent', () => {
  let component: VillaRentUpdateComponent;
  let fixture: ComponentFixture<VillaRentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaRentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaRentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
