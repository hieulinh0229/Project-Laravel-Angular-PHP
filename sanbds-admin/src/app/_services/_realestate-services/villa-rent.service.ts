import { Injectable } from '@angular/core';
import { RealestateService } from './_realestate.service';
import { VillaRent } from 'app/_models/villa-rent.model';

@Injectable({
  providedIn: 'root'
})
export class VillaRentService extends RealestateService {

  route = 'villa-rent';
  getClass() {
    return VillaRent;
  }

  getRoute() {
    return this.route;
  }
}
