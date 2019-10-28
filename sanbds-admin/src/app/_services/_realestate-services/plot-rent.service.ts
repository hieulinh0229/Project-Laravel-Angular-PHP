import { Injectable } from '@angular/core';
import { RealestateService } from './_realestate.service';
import { PlotRent } from 'app/_models/plot-rent.model';

@Injectable({
  providedIn: 'root'
})
export class PlotRentService extends RealestateService {

  route = 'plot-rent';
  getClass() {
    return PlotRent;
  }

  getRoute() {
    return this.route;
  }
}
