import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVillaSaleComponent } from './update-villa-sale.component';

describe('UpdateVillaSaleComponent', () => {
  let component: UpdateVillaSaleComponent;
  let fixture: ComponentFixture<UpdateVillaSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVillaSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVillaSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
