import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaSaleListComponent } from './villa-sale-list.component';

describe('VilaSaleListComponent', () => {
  let component: VillaSaleListComponent;
  let fixture: ComponentFixture<VillaSaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaSaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
