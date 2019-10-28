import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { MiniFormModule } from '../mini-form/mini-form.module';
import { ToastrModule } from 'ngx-toastr';
const routes: Routes = [
  {path: 'feedback', component:FeedbackComponent },
];

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    FormsModule,
    LandingPageModule,
    MiniFormModule,
    ReactiveFormsModule,
  
    RouterModule.forRoot(routes),
    ToastrModule.forRoot()
  ],
  exports: [
    FeedbackComponent
  ]
})
export class FeedbackModule { }
