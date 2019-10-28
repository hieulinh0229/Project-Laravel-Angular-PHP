import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';

import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { FeedbackModule } from '../feedback/feedback.module';
import { FeedbackComponent } from '../feedback/feedback/feedback.component';

const routes: Routes = [
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'our-team', component: AboutUsComponent },
      { path: 'contact-feedback', component: FeedbackComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'our-team' }
    ]
  },
];

@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent, AboutComponent],
  imports: [
    CommonModule,
    LandingPageModule,
    FeedbackModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AboutModule { }
