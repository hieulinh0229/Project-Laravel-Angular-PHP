import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillaSaleComponent } from './villa-sale/villa-sale.component';
import { VillaSaleDetailComponent } from './villa-sale-detail/villa-sale-detail.component';
import { VillaSaleListComponent } from './villa-sale-list/villa-sale-list.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { VillasSaleService } from './villas-sale.service';
import { VillaSalePosterComponent } from './villa-sale-poster/villa-sale-poster.component';
import {NgxPaginationModule} from 'ngx-pagination';  

import { FormsModule, ReactiveFormsModule } from '@angular/forms';const routes: Routes = [{
  path: 'villa-sale', component: VillaSaleComponent, children: [
    { path: 'list', component: VillaSaleListComponent },
    { path: 'detail/:id', component: VillaSaleDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'list' }
  ]
},
];
@NgModule({
  declarations: [
    VillaSaleComponent,
    VillaSaleDetailComponent,
    VillaSaleListComponent,
    VillaSalePosterComponent],
  providers: [
    VillasSaleService,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LandingPageModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule

  ],
  exports: [
    VillaSalePosterComponent
  ]
})
export class VillaSaleModule { }
