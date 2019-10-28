import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthService } from './_services/auth.service';
import { MatModule } from './_materials/mat.module';
import { SaleREComponent } from './sale-re/sale-re.component';
import { RentREComponent } from './rent-re/rent-re.component';
import { RealEstateModule } from './real-estate/real-estate.module';
import { HttpClientModule } from '@angular/common/http';
import { PipeModule } from './_pipes/pipe.module';
import { ToastrModule } from 'ngx-toastr';
import { UserListComponent } from './user-list/user-list.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { FeedbackListComponent } from './dashboard/feedback-list/feedback-list.component';
import { FeedbackDetailComponent } from './dashboard/feedback-detail/feedback-detail.component';
import { SendmailListComponent } from './dashboard/sendmail-list/sendmail-list.component';
import { SendmailDetailComponent } from './dashboard/sendmail-detail/sendmail-detail.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RealEstateModule,
    ComponentsModule,
    RouterModule,
    MatModule,
    PipeModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),    
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminLayoutComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LogInComponent,
    SaleREComponent,
    RentREComponent,
    UserListComponent,
    AdminListComponent,
    AdminProfileComponent,
    FeedbackListComponent,
    FeedbackDetailComponent,
    SendmailListComponent,
    SendmailDetailComponent

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
