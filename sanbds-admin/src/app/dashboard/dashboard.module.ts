import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { SendmailListComponent } from './sendmail-list/sendmail-list.component';
import { SendmailDetailComponent } from './sendmail-detail/sendmail-detail.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FeedbackListComponent, SendmailListComponent]
})
export class DashboardModule { }
