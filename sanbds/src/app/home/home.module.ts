import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { RouterModule, Routes } from '@angular/router';
import { RentPageComponent } from './rent-page/rent-page.component';
import { SalePageComponent } from './sale-page/sale-page.component';
import { HomePageComponent } from './home-page.component';
import { VillaRentModule } from '../villa-rent/villa-rent.module';
import { ApartmentRentModule } from '../apartment-rent/apartment-rent.module';
import { HousesRentModule } from '../houses-rent/houses-rent.module';
import { PlotsRentModule } from '../plots-rent/plots-rent.module';
import { VillaSaleModule } from '../villas-sale/villa-sale.module';
import { ApartmentSaleModule } from '../apartment-sale/apartment-sale.module';
import { HousesSaleModule } from '../houses-sale/houses-sale.module';
import { PlotsSaleModule } from '../plots-sale/plots-sale.module';
import { NgxPaginationModule } from 'ngx-pagination';

// const routes: Routes = [
//   { path: 'home', component: HomePageComponent, children: [
//     { path: 'sale', component: SalePageComponent },
//     { path: 'rent', component: RentPageComponent },
//     { path: '**', pathMatch: 'full', redirectTo: 'sale'}
//   ] },
  
// ];

@NgModule({
  declarations: [
    HomePageComponent,
    RentPageComponent,
    SalePageComponent    
  ],
  imports: [
    CommonModule,
    LandingPageModule,
    VillaRentModule,
    ApartmentRentModule,
    HousesRentModule,
    PlotsRentModule,
    VillaSaleModule,
    ApartmentSaleModule,
    HousesSaleModule,
    PlotsSaleModule,
    // RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
