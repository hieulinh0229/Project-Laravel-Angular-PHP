import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillaRentListComponent } from './villa-rent-list/villa-rent-list.component';
import { MatModule } from 'app/_materials/mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'app/_pipes/pipe.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { VillaRentService } from 'app/_services/_realestate-services/villa-rent.service';
import { VillaRentUpdateComponent } from './villa-rent-update/villa-rent-update.component';
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
  declarations: [
    VillaRentListComponent,
    VillaRentUpdateComponent
  ],

  exports: [
    VillaRentListComponent,
    VillaRentUpdateComponent
  ],
  providers: [
    VillaRentService
  ]
})
export class VillaRentModule { }
