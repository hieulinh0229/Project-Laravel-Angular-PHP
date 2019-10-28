import { Injectable } from '@angular/core';
import { HouseSale } from '../../_models/house-sale.model';
import { RealestateService } from './_realestate.service';

@Injectable({
  providedIn: 'root'
})
export class HouseSaleService extends RealestateService {

  route = 'house-sale';
  getClass() {
    return HouseSale;
  }

  getRoute() {
    return this.route;
  }
}
