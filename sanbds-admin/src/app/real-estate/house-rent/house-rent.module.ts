import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'app/_materials/mat.module';
import { PipeModule } from 'app/_pipes/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { HouseRentListComponent } from './house-rent-list/house-rent-list.component';
import { HouseRentService } from 'app/_services/_realestate-services/house-rent.service';
import { HouseRentUpdateComponent } from './house-rent-update/house-rent-update.component';
import { PartialsModule } from 'app/partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    MatModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    PartialsModule
  ],
  declarations: [ HouseRentListComponent, HouseRentUpdateComponent],

  exports: [
    HouseRentListComponent,
    HouseRentUpdateComponent
  ],

  providers: [
    HouseRentService
  ]
})
export class HouseRentModule { }
