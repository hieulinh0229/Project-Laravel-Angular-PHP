import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SendmailComponent } from './sendmail.component';

const routes: Routes = [
  {                                        
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
     path: 'sendmail',
     component: SendmailComponent
  }
]
@NgModule({
  declarations: [
    SendmailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppSendmailModule { }
