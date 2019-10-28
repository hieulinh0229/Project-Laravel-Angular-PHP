import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateHouseSaleComponent } from './update-house-sale/update-house-sale.component';
import { UpdateHouseRentComponent } from './update-house-rent/update-house-rent.component';
import { UpdatePlotRentComponent } from './update-plot-rent/update-plot-rent.component';
import { UpdatePlotSaleComponent } from './update-plot-sale/update-plot-sale.component';
import { UpdateVillaSaleComponent } from './update-villa-sale/update-villa-sale.component';
import { UpdateVillaRentComponent } from './update-villa-rent/update-villa-rent.component';
import { UpdateApartmentRentComponent } from './update-apartment-rent/update-apartment-rent.component';
import { UpdateApartmentSaleComponent } from './update-apartment-sale/update-apartment-sale.component';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateBdsComponent } from './update-bds/update-bds.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
  path: 'update', component: UpdateBdsComponent, children: [
    { path: 'villa-sale/:id', component: UpdateVillaSaleComponent },
    { path: 'villa-rent/:id', component: UpdateVillaRentComponent },
    { path: 'plot-sale/:id', component: UpdatePlotSaleComponent },
    { path: 'plot-rent/:id', component: UpdatePlotRentComponent },
    { path: 'house-sale/:id', component: UpdateHouseSaleComponent },
    { path: 'house-rent/:id', component: UpdateHouseRentComponent },
    { path: 'apartment-sale/:id', component: UpdateApartmentSaleComponent },
    { path: 'apartment-rent/:id', component: UpdateApartmentRentComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ]
},
];
@NgModule({
  declarations: [
    UpdateHouseSaleComponent,
    UpdateHouseRentComponent,
    UpdatePlotRentComponent,
    UpdatePlotSaleComponent,
    UpdateVillaSaleComponent,
    UpdateVillaRentComponent,
    UpdateApartmentRentComponent,
    UpdateApartmentSaleComponent,
    UpdateBdsComponent
  ],
  imports: [
    CommonModule,
    LandingPageModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ]
})
export class UpdateBdsModule { }
