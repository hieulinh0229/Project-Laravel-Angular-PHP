import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmailListComponent } from './sendmail-list.component';

describe('SendmailListComponent', () => {
  let component: SendmailListComponent;
  let fixture: ComponentFixture<SendmailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendmailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
