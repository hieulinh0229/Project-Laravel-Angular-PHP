import { Injectable } from '@angular/core';
import { RealestateService } from './_realestate.service';
import { ApartmentRent } from 'app/_models/apartment-rent.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentRentService extends RealestateService {

  route = 'apartment-rent';
  getClass() {
    return ApartmentRent;
  }

  getRoute() {
    return this.route;
  }
}
