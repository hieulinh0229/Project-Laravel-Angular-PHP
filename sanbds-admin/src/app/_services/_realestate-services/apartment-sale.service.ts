import { Injectable } from '@angular/core';
import { RealestateService } from './_realestate.service';
import { ApartmentSale } from 'app/_models/apartment-sale.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentSaleService extends RealestateService {

  route = 'apartment-sale';
  getClass() {
    return ApartmentSale;
  }

  getRoute() {
    return this.route;
  }
}
