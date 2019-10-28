import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVillaSaleComponent } from './create-villa-sale.component';

describe('CreateVillaSaleComponent', () => {
  let component: CreateVillaSaleComponent;
  let fixture: ComponentFixture<CreateVillaSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVillaSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVillaSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
