import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ApartmentRentListComponent } from './apartment-rent-list/apartment-rent-list.component';
import { ApartmentRentComponent } from './apartment-rent/apartment-rent.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { ApartmentRentService } from './apartment-rent.service';
import { ApartmentRentPosterComponent } from './apartment-rent-poster/apartment-rent-poster.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {path: 'apartment-rent', component: ApartmentRentComponent,
  children: [
    {path: 'detail/:id', component: DetailComponent},
    {path: 'list', component: ApartmentRentListComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'list' }
  ]
}]

@NgModule({
  declarations: [
    DetailComponent, 
    ApartmentRentListComponent, 
    ApartmentRentComponent, ApartmentRentPosterComponent],
  imports: [
    CommonModule,
    LandingPageModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [ApartmentRentService],
  exports: [
    ApartmentRentPosterComponent  ]
})
export class ApartmentRentModule { }
