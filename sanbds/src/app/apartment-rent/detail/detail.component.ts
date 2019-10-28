import { Component, OnInit, Input } from '@angular/core';
import { ApartmentRent } from '../apartment-rent';
import { ApartmentRentService } from '../apartment-rent.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  apartment: ApartmentRent;
  compatibles: ApartmentRent[];
  constructor(private apartmentRentService: ApartmentRentService, private route: ActivatedRoute) { }
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
   this.sub = this.apartmentRentService.getApartmentRentById(id).subscribe(
     data => {
       this.apartment = data;
       this.compatibles = data['compatibles'];
     });
 }
}
