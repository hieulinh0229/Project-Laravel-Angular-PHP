import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesSaleListComponent } from './houses-sale-list/houses-sale-list.component';
import { HouseSaleDetailComponent } from './house-sale-detail/house-sale-detail.component';

import { RouterModule, Routes } from '@angular/router';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { HousesSaleService } from './houses-sale.service';
import { HouseSaleComponent } from './house-sale/house-sale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HouseSalePosterComponent } from './house-sale-poster/house-sale-poster.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [{
  path: 'house-sale', component: HouseSaleComponent, children: [
    { path: 'list', component: HousesSaleListComponent },
    { path: 'detail/:id', component: HouseSaleDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'list' }
  ]
},
];

@NgModule({
  declarations: [
    HousesSaleListComponent,
    HouseSaleDetailComponent,
    HouseSaleComponent,
    HouseSalePosterComponent
  ],
  providers: [
    HousesSaleService,

  ],
  imports: [
    CommonModule,
    LandingPageModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    HouseSalePosterComponent
  ]
})
export class HousesSaleModule { }
