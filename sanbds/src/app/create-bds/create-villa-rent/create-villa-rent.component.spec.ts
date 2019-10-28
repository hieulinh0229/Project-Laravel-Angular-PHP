import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVillaRentComponent } from './create-villa-rent.component';

describe('CreateVillaRentComponent', () => {
  let component: CreateVillaRentComponent;
  let fixture: ComponentFixture<CreateVillaRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVillaRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVillaRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
