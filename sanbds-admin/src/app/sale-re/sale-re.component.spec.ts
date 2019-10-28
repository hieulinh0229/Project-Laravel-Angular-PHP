import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleREComponent } from './sale-re.component';

describe('SaleREComponent', () => {
  let component: SaleREComponent;
  let fixture: ComponentFixture<SaleREComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleREComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
