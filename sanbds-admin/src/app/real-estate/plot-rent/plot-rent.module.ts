import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotRentListComponent } from './plot-rent-list/plot-rent-list.component';
import { MatModule } from 'app/_materials/mat.module';
import { PipeModule } from 'app/_pipes/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { PlotRentService } from 'app/_services/_realestate-services/plot-rent.service';
import { PlotRentUpdateComponent } from './plot-rent-update/plot-rent-update.component';
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
    PlotRentListComponent,
    PlotRentUpdateComponent
  ],
  providers: [
    PlotRentService,
    PlotRentUpdateComponent
  ],
  exports: [
    PlotRentListComponent
  ]
})
export class PlotRentModule { }
