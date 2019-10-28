import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { VillaRentModule } from '../villa-rent/villa-rent.module';
import { ApartmentRentModule } from '../apartment-rent/apartment-rent.module';
import { HousesRentModule } from '../houses-rent/houses-rent.module';
import { PlotsRentModule } from '../plots-rent/plots-rent.module';
import { VillaSaleModule } from '../villas-sale/villa-sale.module';
import { ApartmentSaleModule } from '../apartment-sale/apartment-sale.module';
import { HousesSaleModule } from '../houses-sale/houses-sale.module';
import { PlotsSaleModule } from '../plots-sale/plots-sale.module';

const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'user', component: UserComponent},
  { path: 'user/bds', component: UserLayoutComponent},
];

@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent,
    DashboardComponent,
    UserComponent,
    UserLayoutComponent,
  ],
  providers: [
    UserService,

  ],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    LandingPageModule,
    VillaRentModule,
    ApartmentRentModule,
    HousesRentModule,
    PlotsRentModule,
    VillaSaleModule,
    ApartmentSaleModule,
    HousesSaleModule,
    PlotsSaleModule,
  ],
  exports: [
    UserLayoutComponent
  ]
})
export class UserModule { }
