import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmenSaleListComponent } from './apartmen-sale-list.component';

describe('ApartmenSaleListComponent', () => {
  let component: ApartmenSaleListComponent;
  let fixture: ComponentFixture<ApartmenSaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmenSaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmenSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
