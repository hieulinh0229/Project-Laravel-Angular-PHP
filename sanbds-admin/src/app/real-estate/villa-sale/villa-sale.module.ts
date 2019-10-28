import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillaSaleListComponent } from './villa-sale-list/villa-sale-list.component';
import { MatModule } from 'app/_materials/mat.module';
import { PipeModule } from 'app/_pipes/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VillaSaleService } from '../../_services/_realestate-services/villa-sale.service';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { VillaSaleUpdateComponent } from './villa-sale-update/villa-sale-update.component';
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
    VillaSaleListComponent,
    VillaSaleUpdateComponent
  ],
  exports: [
    VillaSaleListComponent
  ],
  providers: [
    VillaSaleService
  ]
})
export class VillaSaleModule { }
