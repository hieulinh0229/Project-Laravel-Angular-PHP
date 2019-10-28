import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotsSaleListComponent } from './plots-sale-list/plots-sale-list.component';
import { PlotSaleDetailComponent } from './plot-sale-detail/plot-sale-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { PlotsSaleService } from './plots-sale.service';
import { PlotSaleComponent } from './plot-sale/plot-sale.component';
import { PlotSalePosterComponent } from './plot-sale-poster/plot-sale-poster.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [{
  path: 'plot-sale', component: PlotSaleComponent, children: [
    { path: 'list', component: PlotsSaleListComponent },
    { path: 'detail/:id', component: PlotSaleDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'list' }
  ]
},
];

@NgModule({
  declarations: [
    PlotSaleComponent,
    PlotsSaleListComponent,
    PlotSaleDetailComponent,
    PlotSalePosterComponent
  ],
  providers: [
    PlotsSaleService,

  ],
  imports: [
    CommonModule,
    LandingPageModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    PlotSalePosterComponent
  ]
})
export class PlotsSaleModule { }
