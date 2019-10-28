import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './user/log-in/log-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { RealEstateLayoutComponent } from './landing-page/real-estate-layout/real-estate-layout.component';
import { HomePageComponent } from './home/home-page.component';
import { SalePageComponent } from './home/sale-page/sale-page.component';
import { RentPageComponent } from './home/rent-page/rent-page.component';
import { HouseSaleComponent } from './houses-sale/house-sale/house-sale.component';
import { HouseRentListComponent } from './houses-rent/house-rent-list/house-rent-list.component';
import { HousesSaleListComponent } from './houses-sale/houses-sale-list/houses-sale-list.component';
import { ApartmenSaleListComponent } from './apartment-sale/apartmen-sale-list/apartmen-sale-list.component';
import { ApartmentRentListComponent } from './apartment-rent/apartment-rent-list/apartment-rent-list.component';
import { VillaSaleListComponent } from './villas-sale/villa-sale-list/villa-sale-list.component';
import { VillaRentListComponent } from './villa-rent/villa-rent-list/villa-rent-list.component';
import { PlotsSaleListComponent } from './plots-sale/plots-sale-list/plots-sale-list.component';
import { PlotRentListComponent } from './plots-rent/plot-rent-list/plot-rent-list.component';
import { AboutComponent } from './about/about/about.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { ContactUsComponent } from './about/contact-us/contact-us.component';
import { HouseSaleDetailComponent } from './houses-sale/house-sale-detail/house-sale-detail.component';
import { HouseRentDetailComponent } from './houses-rent/house-rent-detail/house-rent-detail.component';
import { DetailComponent } from './apartment-rent/detail/detail.component';
import { ApartmenSaleDetailComponent } from './apartment-sale/apartmen-sale-detail/apartmen-sale-detail.component';
import { VillaSaleDetailComponent } from './villas-sale/villa-sale-detail/villa-sale-detail.component';
import { VillaRentDetailComponent } from './villa-rent/villa-rent-detail/villa-rent-detail.component';
import { PlotSaleDetailComponent } from './plots-sale/plot-sale-detail/plot-sale-detail.component';
import { PlotRentDetailComponent } from './plots-rent/plot-rent-detail/plot-rent-detail.component';
import { ProjectListComponent } from './projects/components/project-list/project-list.component';
import { UserComponent } from './user/user/user.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { CreateBdsComponent } from './create-bds/create-bds/create-bds.component';
import { CreateHouseSaleComponent } from './create-bds/create-house-sale/create-house-sale.component';
import { CreateHouseRentComponent } from './create-bds/create-house-rent/create-house-rent.component';
import { CreateVillaSaleComponent } from './create-bds/create-villa-sale/create-villa-sale.component';
import { CreateVillaRentComponent } from './create-bds/create-villa-rent/create-villa-rent.component';
import { CreateApartmentSaleComponent } from './create-bds/create-apartment-sale/create-apartment-sale.component';
import { CreateApartmentRentComponent } from './create-bds/create-apartment-rent/create-apartment-rent.component';
import { CreatePlotSaleComponent } from './create-bds/create-plot-sale/create-plot-sale.component';
import { CreatePlotRentComponent } from './create-bds/create-plot-rent/create-plot-rent.component';
import { CreateBdsLayoutComponent } from './create-bds/create-bds-layout/create-bds-layout.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'about', component: AboutComponent, children: [
      { path: '', component: AboutUsComponent },
      { path: 'contact', component: ContactUsComponent }
    ]
  },

  // User Management
  { path: 'user', component: UserComponent },
  { path: 'user-layout', component: UserLayoutComponent },

  {
    path: '', component: RealEstateLayoutComponent, children: [

      // Welcome
      { path: '', pathMatch: 'full', redirectTo: 'home'},
      { path: 'home', component: SalePageComponent },
      { path: 'sale', component: SalePageComponent },
      { path: 'rent', component: RentPageComponent },

      // Real Estate List router
      { path: 'house-sale', component: HousesSaleListComponent },
      { path: 'house-rent', component: HouseRentListComponent },
      { path: 'apartment-sale', component: ApartmenSaleListComponent },
      { path: 'apartment-rent', component: ApartmentRentListComponent },
      { path: 'villa-sale', component: VillaSaleListComponent },
      { path: 'villa-rent', component: VillaRentListComponent },
      { path: 'plot-sale', component: PlotsSaleListComponent },
      { path: 'plot-rent', component: PlotRentListComponent },

      // Real Estate Detail router
      { path: 'house-sale/detail/:id', component: HouseSaleDetailComponent },
      { path: 'house-rent/detail/:id', component: HouseRentDetailComponent },
      { path: 'apartment-sale/detail/:id', component: ApartmenSaleDetailComponent },
      { path: 'apartment-rent/detail/:id', component: DetailComponent },
      { path: 'villa-sale/detail/:id', component: VillaSaleDetailComponent },
      { path: 'villa-rent/detail/:id', component: VillaRentDetailComponent },
      { path: 'plot-sale/detail/:id', component: PlotSaleDetailComponent },
      { path: 'plot-rent/detail/:id', component: PlotRentDetailComponent },

      // Project router
      { path: 'project', component: ProjectListComponent },

      // Create RE
      {
        path: 'create', component: CreateBdsLayoutComponent,canActivate: [AuthGuard], data: {roles : ['DangBai', 'Admin']}, children: [
          { path: '', component: CreateBdsComponent },
          { path: 'house-sale', component: CreateHouseSaleComponent },
          { path: 'house-rent', component: CreateHouseRentComponent },
          { path: 'villa-sale', component: CreateVillaSaleComponent },
          { path: 'villa-rent', component: CreateVillaRentComponent },
          { path: 'apartment-sale', component: CreateApartmentSaleComponent },
          { path: 'apartment-rent', component: CreateApartmentRentComponent },
          { path: 'plot-sale', component: CreatePlotSaleComponent },
          { path: 'plot-rent', component: CreatePlotRentComponent },
        ]
      },
      
    ]
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
