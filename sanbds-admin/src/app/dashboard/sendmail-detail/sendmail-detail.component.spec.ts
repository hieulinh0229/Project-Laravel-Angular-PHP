import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmailDetailComponent } from './sendmail-detail.component';

describe('SendmailDetailComponent', () => {
  let component: SendmailDetailComponent;
  let fixture: ComponentFixture<SendmailDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendmailDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
