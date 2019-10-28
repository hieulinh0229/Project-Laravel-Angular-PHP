import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVillaRentComponent } from './update-villa-rent.component';

describe('UpdateVillaRentComponent', () => {
  let component: UpdateVillaRentComponent;
  let fixture: ComponentFixture<UpdateVillaRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVillaRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVillaRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
