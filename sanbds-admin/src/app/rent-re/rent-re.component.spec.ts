import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentREComponent } from './rent-re.component';

describe('RentREComponent', () => {
  let component: RentREComponent;
  let fixture: ComponentFixture<RentREComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentREComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
