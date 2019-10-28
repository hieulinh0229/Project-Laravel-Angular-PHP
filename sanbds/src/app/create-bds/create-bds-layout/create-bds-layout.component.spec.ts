import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBdsLayoutComponent } from './create-bds-layout.component';

describe('CreateBdsLayoutComponent', () => {
  let component: CreateBdsLayoutComponent;
  let fixture: ComponentFixture<CreateBdsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBdsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBdsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
