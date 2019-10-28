import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaSalePosterComponent } from './villa-sale-poster.component';

describe('VillaSalePosterComponent', () => {
  let component: VillaSalePosterComponent;
  let fixture: ComponentFixture<VillaSalePosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaSalePosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaSalePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
