import { Component, OnInit } from '@angular/core';
import { HousesSaleService } from '../houses-sale.service';
import { Subscription } from 'rxjs';
import { HouseSale } from '../house-sale.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-house-sale-detail',
  templateUrl: './house-sale-detail.component.html',
  styleUrls: ['./house-sale-detail.component.css']
})
export class HouseSaleDetailComponent implements OnInit {

  sub: Subscription;
  houseSale : HouseSale;
  compatibles: HouseSale[];
  constructor(
    private houseSaleService: HousesSaleService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

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
   this.sub = this.houseSaleService.getHouseSaleById(id).subscribe(
     data => {
       this.houseSale = data;
       this.compatibles = data['compatibles'];
     });
 }

}
