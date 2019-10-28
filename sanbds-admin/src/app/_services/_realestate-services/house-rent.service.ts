import { Injectable } from '@angular/core';
import { RealestateService } from './_realestate.service';
import { HouseRent } from 'app/_models/house-rent.model';

@Injectable({
  providedIn: 'root'
})
export class HouseRentService extends RealestateService{

  route = "house-rent"
  getClass() {
    return HouseRent;
  }
  
  getRoute() {
    return this.route;
  }
}
