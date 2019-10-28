import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HouseRent } from '../house-rent';
import { HouseRentService } from '../house-rent.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-house-rent-detail',
  templateUrl: './house-rent-detail.component.html',
  styleUrls: ['./house-rent-detail.component.css']
})
export class HouseRentDetailComponent implements OnInit {

  sub: Subscription;
  houseRent: HouseRent;
  compatibles: HouseRent[];


  constructor(
    private houseRenService: HouseRentService,
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
   this.sub = this.houseRenService.getHouseRentById(id).subscribe(
     data => {
       this.houseRent = data;
       this.compatibles = data['compatibles'];
     });
 }
}
