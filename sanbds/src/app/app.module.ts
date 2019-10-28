import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { HousesSaleModule } from './houses-sale/houses-sale.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { ApartmentSaleModule } from './apartment-sale/apartment-sale.module';
import { VillaRentModule } from './villa-rent/villa-rent.module';
import { ApartmentRentModule } from './apartment-rent/apartment-rent.module';
import { PlotsSaleModule } from './plots-sale/plots-sale.module';
import { VillaSaleModule } from './villas-sale/villa-sale.module';
import { PlotsRentModule } from './plots-rent/plots-rent.module';
import { HousesRentModule } from './houses-rent/houses-rent.module';
import { ProjectsModule } from './projects/projects.module';
import { AboutModule } from './about/about.module';
import { CreateBdsModule } from './create-bds/create-bds.module';
import { UpdateBdsModule } from './update-bds/update-bds.module';
import { AppSendmailModule } from './sendmail/app-sendmail.module';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { FeedbackModule } from './feedback/feedback.module';
import { JwtInterceptor } from './_helper/jwt.interceptor';
import { ErrorInterceptor } from './_helper/error.interceptor';
import { ChatFormComponent } from './component/chat-form/chat-form.component';
import { ChatMainComponent } from './component/chat-main/chat-main.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { MessageListComponent } from './component/message-list/message-list.component';
import { MessageShowComponent } from './component/message-show/message-show.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupFormComponent } from './component/signup-form/signup-form.component';
import { UserItemComponent } from './component/user-item/user-item.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { HtkhModule } from './component/htkh.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { AuthService } from './service/auth.service';
import { ChatService } from './service/chat.service';


const routes: Routes = [
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatMainComponent,
    LoginFormComponent,
    MessageListComponent,
    MessageShowComponent,
    NavbarComponent,
    SignupFormComponent,
    UserItemComponent,
    UserlistComponent,
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProjectsModule,
    HousesSaleModule,
    LandingPageModule,
    PlotsSaleModule,  
    VillaSaleModule,
    PlotsRentModule,
    UserModule,
    AboutModule,
  
    
    HttpClientModule,
    ApartmentSaleModule,
    VillaRentModule,    
    ApartmentRentModule,
    HousesRentModule,
    CreateBdsModule, 
    AppSendmailModule, 
    
   
    UpdateBdsModule,   
    ToastrModule.forRoot({preventDuplicates : true}),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FeedbackModule,
    HtkhModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    ChatService,    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
      JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
