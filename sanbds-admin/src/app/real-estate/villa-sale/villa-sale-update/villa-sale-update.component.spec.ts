import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaSaleUpdateComponent } from './villa-sale-update.component';

describe('VillaSaleUpdateComponent', () => {
  let component: VillaSaleUpdateComponent;
  let fixture: ComponentFixture<VillaSaleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaSaleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaSaleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
