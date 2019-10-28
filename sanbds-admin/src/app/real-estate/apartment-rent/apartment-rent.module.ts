import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentRentListComponent } from './apartment-rent-list/apartment-rent-list.component';
import { PipeModule } from 'app/_pipes/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ApartmentRentService } from 'app/_services/_realestate-services/apartment-rent.service';
import { MatModule } from 'app/_materials/mat.module';
import { ApartmentRentUpdateComponent } from './apartment-rent-update/apartment-rent-update.component';
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
  declarations: [ApartmentRentListComponent, ApartmentRentUpdateComponent],
  exports: [
    ApartmentRentListComponent,
    ApartmentRentUpdateComponent
  ],
  providers: [
    ApartmentRentService
  ]
})
export class ApartmentRentModule { }
