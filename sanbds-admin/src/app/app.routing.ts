import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TableListComponent } from './table-list/table-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { SaleREComponent } from './sale-re/sale-re.component';
import { RentREComponent } from './rent-re/rent-re.component';
import { LogInComponent } from './log-in/log-in.component';
import { ApartmentSaleUpdateComponent } from './real-estate/apartment-sale/apartment-sale-update/apartment-sale-update.component';
import { HouseSaleUpdateComponent } from './real-estate/house-sale/house-sale-update/house-sale-update.component';
import { AuthGuard } from './_guards/auth.guard';
import { PlotSaleUpdateComponent } from './real-estate/plot-sale/plot-sale-update/plot-sale-update.component';
import { VillaSaleUpdateComponent } from './real-estate/villa-sale/villa-sale-update/villa-sale-update.component';
import { HouseRentUpdateComponent } from './real-estate/house-rent/house-rent-update/house-rent-update.component';
import { ApartmentRentUpdateComponent } from './real-estate/apartment-rent/apartment-rent-update/apartment-rent-update.component';
import { VillaRentUpdateComponent } from './real-estate/villa-rent/villa-rent-update/villa-rent-update.component';
import { PlotRentUpdateComponent } from './real-estate/plot-rent/plot-rent-update/plot-rent-update.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { FeedbackListComponent } from './dashboard/feedback-list/feedback-list.component';
import { FeedbackDetailComponent } from './dashboard/feedback-detail/feedback-detail.component';
import { SendmailDetailComponent } from './dashboard/sendmail-detail/sendmail-detail.component';

const routes: Routes = [
  
  { path: 'login', component: LogInComponent },
  {
    path: '',
    component: AdminLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user-profile/:id', component: UserProfileComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'admin-list', component: AdminListComponent },
      { path: 'admin-profile/:id', component: AdminProfileComponent },
      { path: 'sale-re', component: SaleREComponent },
      { path: 'rent-re', component: RentREComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'maps', component: MapsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'upgrade', component: UpgradeComponent },
      { path: 'update-apartment-sale/:id', component: ApartmentSaleUpdateComponent },
      { path: 'update-house-sale/:id', component: HouseSaleUpdateComponent },
      { path: 'update-plot-sale/:id', component: PlotSaleUpdateComponent },
      { path: 'update-villa-sale/:id', component: VillaSaleUpdateComponent },
      { path: 'update-house-rent/:id', component: HouseRentUpdateComponent }, 
      { path: 'update-apartment-rent/:id', component: ApartmentRentUpdateComponent }, 
      { path: 'update-villa-rent/:id', component: VillaRentUpdateComponent }, 
      { path: 'update-plot-rent/:id', component: PlotRentUpdateComponent }, 
      { path: 'feedback/:id', component: FeedbackDetailComponent },
      { path: 'sendmail/:id', component: SendmailDetailComponent },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
