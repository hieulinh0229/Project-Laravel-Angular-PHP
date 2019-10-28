import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaSaleDetailComponent } from './villa-sale-detail.component';

describe('VillaSaleDetailComponent', () => {
  let component: VillaSaleDetailComponent;
  let fixture: ComponentFixture<VillaSaleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaSaleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaSaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
