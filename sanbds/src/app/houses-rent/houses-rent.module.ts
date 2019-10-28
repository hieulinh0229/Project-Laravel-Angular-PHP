import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseRentListComponent } from './house-rent-list/house-rent-list.component';
import { HouseRentDetailComponent } from './house-rent-detail/house-rent-detail.component';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { RouterModule,Routes } from '@angular/router';
import { HouseRentComponent } from './house-rent/house-rent.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HouseRentPosterComponent } from './house-rent-poster/house-rent-poster.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {path: 'house-rent', component: HouseRentComponent,
  children: [
    {path: 'detail/:id', component: HouseRentDetailComponent},
    {path: 'list', component: HouseRentListComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'list' }
  ]
}]
@NgModule({
  declarations: [
    HouseRentComponent,
    HouseRentListComponent,
    HouseRentDetailComponent,
    HouseRentPosterComponent
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
    HouseRentPosterComponent
  ]
})
export class HousesRentModule { }
