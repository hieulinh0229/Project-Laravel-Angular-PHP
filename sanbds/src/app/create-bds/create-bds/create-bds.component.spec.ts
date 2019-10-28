import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBdsComponent } from './create-bds.component';

describe('CreateBdsComponent', () => {
  let component: CreateBdsComponent;
  let fixture: ComponentFixture<CreateBdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
