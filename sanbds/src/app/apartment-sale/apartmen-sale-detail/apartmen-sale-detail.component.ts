import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApartmentSale } from '../apartment-sale';
import { Subscription } from 'rxjs';
import { ApartmentSaleService } from '../apartment-sale.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-apartmen-sale-detail',
  templateUrl: './apartmen-sale-detail.component.html',
  styleUrls: ['./apartmen-sale-detail.component.css']
})
export class ApartmenSaleDetailComponent implements OnInit {
  apartment: ApartmentSale;  
  compatibles: ApartmentSale[];

  constructor(private apartmentSaleService: ApartmentSaleService, private route: ActivatedRoute) { }
  sub: Subscription;

 ngOnInit() {
   const id = +this.route.paramMap.subscribe(
     (params: ParamMap) => {
       const id = +params.get('id');
       this.getApartment(id);
       window.scroll(0, 0);
     }
   );
 }

 getApartment(id: number) {
   this.sub = this.apartmentSaleService.getApartmentSaleById(id).subscribe(
     data => {
       this.apartment = data;
      this.compatibles = data['compatibles'];
     });
 }

}
