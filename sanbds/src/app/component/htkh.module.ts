import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';


const appRoutes : Routes = [
  { path: 'dangnhap', component: LoginFormComponent },
  { path: 'dangky', component: SignupFormComponent },
  { path: 'chat', component: ChatMainComponent },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
})
export class HtkhModule { }
