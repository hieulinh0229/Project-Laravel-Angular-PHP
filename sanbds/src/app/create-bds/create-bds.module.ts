import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateVillaSaleComponent } from './create-villa-sale/create-villa-sale.component';
import { CreateVillaRentComponent } from './create-villa-rent/create-villa-rent.component';
import { CreatePlotSaleComponent } from './create-plot-sale/create-plot-sale.component';
import { CreatePlotRentComponent } from './create-plot-rent/create-plot-rent.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateBdsComponent } from './create-bds/create-bds.component';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { CreateHouseSaleComponent } from './create-house-sale/create-house-sale.component';
import { CreateHouseRentComponent } from './create-house-rent/create-house-rent.component';
import { CreateApartmentSaleComponent } from './create-apartment-sale/create-apartment-sale.component';
import { CreateApartmentRentComponent } from './create-apartment-rent/create-apartment-rent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiniFormModule } from '../mini-form/mini-form.module';
import { AuthGuard } from '../_guards/auth.guard';
import { CreatingSuccessComponent } from './creating-success/creating-success.component';
import { CreateBdsLayoutComponent } from './create-bds-layout/create-bds-layout.component';

const routes: Routes = [{
  path: 'create', component: CreateBdsComponent, canActivate: [AuthGuard] , children: [
    { path: 'villa-sale', component: CreateVillaSaleComponent },
    { path: 'villa-rent', component: CreateVillaRentComponent },
    { path: 'plot-sale', component: CreatePlotSaleComponent },
    { path: 'plot-rent', component: CreatePlotRentComponent },
    { path: 'house-sale', component: CreateHouseSaleComponent },
    { path: 'house-rent', component: CreateHouseRentComponent },
    { path: 'apartment-sale', component: CreateApartmentSaleComponent },
    { path: 'apartment-rent', component: CreateApartmentRentComponent },
    { path: 'success', component: CreatingSuccessComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'house-sale' }
  ]
},
];
@NgModule({
  declarations: [
    CreateVillaSaleComponent,
    CreateVillaRentComponent,
    CreatePlotSaleComponent,
    CreatePlotRentComponent,
    CreateBdsComponent,
    CreateHouseSaleComponent,
    CreateHouseRentComponent,
    CreateApartmentSaleComponent,
    CreateApartmentRentComponent,
    CreatingSuccessComponent,
    CreateBdsLayoutComponent,
  ],
  imports: [
    CommonModule,
    LandingPageModule,
    FormsModule,
    ReactiveFormsModule,
    MiniFormModule,
    RouterModule.forRoot(routes),
  ]
})
export class CreateBdsModule { }
