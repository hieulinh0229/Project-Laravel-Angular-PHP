import { Injectable } from '@angular/core';
import { PlotSale } from 'app/_models/plot-sale.model';
import { RealestateService } from './_realestate.service';

@Injectable({
  providedIn: 'root'
})
export class PlotSaleService  extends RealestateService{

  route = 'plot-sale';
  getClass() {
    return PlotSale;
  }

  getRoute() {
    return this.route;
  }
}
