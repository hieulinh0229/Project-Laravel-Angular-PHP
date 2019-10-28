import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentSaleListComponent } from './apartment-sale-list/apartment-sale-list.component';
import { MatModule } from 'app/_materials/mat.module';
import { PipeModule } from 'app/_pipes/pipe.module';
import { ApartmentSaleUpdateComponent } from './apartment-sale-update/apartment-sale-update.component';
import { PartialsModule } from 'app/partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    MatModule,
    PipeModule,
    PartialsModule
  ],
  declarations: [
    ApartmentSaleListComponent,
    ApartmentSaleUpdateComponent
  ],
  exports: [
    ApartmentSaleListComponent,
    ApartmentSaleUpdateComponent
  ]
})
export class ApartmentSaleModule { }
