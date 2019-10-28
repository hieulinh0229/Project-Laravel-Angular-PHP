import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBdsComponent } from './update-bds.component';

describe('UpdateBdsComponent', () => {
  let component: UpdateBdsComponent;
  let fixture: ComponentFixture<UpdateBdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
