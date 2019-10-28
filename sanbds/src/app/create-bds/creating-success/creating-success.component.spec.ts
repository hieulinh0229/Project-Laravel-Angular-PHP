import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingSuccessComponent } from './creating-success.component';

describe('CreatingSuccessComponent', () => {
  let component: CreatingSuccessComponent;
  let fixture: ComponentFixture<CreatingSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
