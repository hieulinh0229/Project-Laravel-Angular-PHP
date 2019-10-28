import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotRentComponent } from './plot-rent/plot-rent.component';
import { PlotRentListComponent } from './plot-rent-list/plot-rent-list.component';
import { PlotRentDetailComponent } from './plot-rent-detail/plot-rent-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PlotsRentService } from './plots-rent.service';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlotRentPosterComponent } from './plot-rent-poster/plot-rent-poster.component';
import { NgxPaginationModule } from 'ngx-pagination';
const routes: Routes = [{
  path: 'plot-rent', component: PlotRentComponent, children: [
    { path: 'list', component: PlotRentListComponent },
    { path: 'detail/:id', component: PlotRentDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'list' }
  ]
},
];

@NgModule({
  declarations: [
    PlotRentComponent,
    PlotRentListComponent,
    PlotRentDetailComponent,
    PlotRentPosterComponent
  ],
  providers: [
    PlotsRentService,

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
    PlotRentPosterComponent
  ]
})
export class PlotsRentModule { }
