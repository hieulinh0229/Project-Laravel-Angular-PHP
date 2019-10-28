import { Injectable } from '@angular/core';
import { VillaSale } from '../../_models/villa-sale.model';
import { RealestateService } from './_realestate.service';

@Injectable({
  providedIn: 'root'
})

export class VillaSaleService extends RealestateService {

  // Sau khi copy, thay đổi biến route phù hợp với service, thay đổi class trả về ở phương thúc getClass();
  route = 'villa-sale';
  getClass() {
    return VillaSale;
  }

  getRoute() {
    return this.route;
  }
}
