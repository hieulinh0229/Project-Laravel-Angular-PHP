import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillaRentComponent } from './villa-rent/villa-rent.component';
import { VillaRentDetailComponent } from './villa-rent-detail/villa-rent-detail.component';
import { VillaRentListComponent } from './villa-rent-list/villa-rent-list.component';
import { RouterModule, Routes } from '@angular/router';
import { VillasRentService } from './villas-rent.service';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { VillaRentPosterComponent } from './villa-rent-poster/villa-rent-poster.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {path: 'villa-rent', component: VillaRentComponent,
   children: [
    { path: 'detail/:id', component: VillaRentDetailComponent },
    { path: 'list', component: VillaRentListComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'list' }
  ]
}]

@NgModule({
  declarations: [
    VillaRentComponent,
    VillaRentDetailComponent, 
    VillaRentListComponent, VillaRentPosterComponent 
  ],
  imports: [
    CommonModule,
    LandingPageModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [VillasRentService],
  exports: [
    VillaRentPosterComponent
  ]
})
export class VillaRentModule { }
