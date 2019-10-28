import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaSaleComponent } from './villa-sale.component';

describe('VillaSaleComponent', () => {
  let component: VillaSaleComponent;
  let fixture: ComponentFixture<VillaSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
