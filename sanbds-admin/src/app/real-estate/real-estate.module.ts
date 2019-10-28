import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillaSaleModule } from './villa-sale/villa-sale.module';
import { ApartmentSaleModule } from './apartment-sale/apartment-sale.module';
import { HouseSaleModule } from './house-sale/house-sale.module';
import { PlotSaleModule } from './plot-sale/plot-sale.module';
import { VillaRentModule } from './villa-rent/villa-rent.module';
import { ApartmentRentModule } from './apartment-rent/apartment-rent.module';
import { PlotRentModule } from './plot-rent/plot-rent.module';
import { HouseRentModule } from './house-rent/house-rent.module';

@NgModule({
  imports: [
    CommonModule,
    VillaSaleModule,
    ApartmentSaleModule,
    HouseSaleModule,
    PlotSaleModule,
    VillaRentModule,
    ApartmentRentModule,
    PlotRentModule,
    HouseRentModule
  ],
  declarations: [
    
  ],
  exports: [
    VillaSaleModule,
    ApartmentSaleModule,
    HouseSaleModule,
    PlotSaleModule,
    VillaRentModule,
    ApartmentRentModule,
    PlotRentModule,
    HouseRentModule
  ]
})
export class RealEstateModule { }
