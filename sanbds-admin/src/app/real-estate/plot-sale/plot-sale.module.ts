import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotSaleListComponent } from './plot-sale-list/plot-sale-list.component';
import { MatModule } from 'app/_materials/mat.module';
import { PipeModule } from 'app/_pipes/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { PlotSaleService } from 'app/_services/_realestate-services/plot-sale.service';
import { PlotSaleUpdateComponent } from './plot-sale-update/plot-sale-update.component';
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
    PlotSaleListComponent, 
    PlotSaleUpdateComponent,
  ],
  
  exports: [
    PlotSaleListComponent,
    PlotSaleUpdateComponent
  ],
  providers: [
    PlotSaleService
  ]
})
export class PlotSaleModule { }
