import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ApartmentSaleComponent } from './apartment-sale/apartment-sale.component';
import { ApartmenSaleDetailComponent } from './apartmen-sale-detail/apartmen-sale-detail.component';
import { ApartmenSaleListComponent } from './apartmen-sale-list/apartmen-sale-list.component';
import { ApartmentSalePosterComponent } from './apartment-sale-poster/apartment-sale-poster.component';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [{
  path: 'apartment-sale', component: ApartmentSaleComponent, children: [
    { path: 'list', component: ApartmenSaleListComponent },
    { path: 'detail/:id', component: ApartmenSaleDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'list' }
  ]
},
];
@NgModule({
  declarations: [
    ApartmentSaleComponent,
    ApartmenSaleDetailComponent,
    ApartmenSaleListComponent,
    ApartmentSalePosterComponent,
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
    ApartmentSalePosterComponent
  ]
})
export class ApartmentSaleModule { }
