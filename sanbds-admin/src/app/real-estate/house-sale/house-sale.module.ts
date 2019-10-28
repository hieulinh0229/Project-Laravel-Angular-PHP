import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseSaleListComponent } from './house-sale-list/house-sale-list.component';
import { MatModule } from 'app/_materials/mat.module';
import { PipeModule } from 'app/_pipes/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { HouseSaleService } from '../../_services/_realestate-services/house-sale.service';
import { HouseSaleUpdateComponent } from './house-sale-update/house-sale-update.component';
import { PartialsModule } from 'app/partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    MatModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
    PartialsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    

  ],
  declarations: [
    HouseSaleListComponent,
    HouseSaleUpdateComponent
  ],
  exports: [
    HouseSaleListComponent
  ],
  providers: [
    HouseSaleService
  ]
})
export class HouseSaleModule { }
