import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaRentListComponent } from './villa-rent-list.component';

describe('VillaRentListComponent', () => {
  let component: VillaRentListComponent;
  let fixture: ComponentFixture<VillaRentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaRentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaRentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
