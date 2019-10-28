import { Component, OnInit } from '@angular/core';
import { VillasRentService } from '../villas-rent.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { VillaRent } from '../villa-rent.model';
@Component({
  selector: 'app-villa-rent-detail',
  templateUrl: './villa-rent-detail.component.html',
  styleUrls: ['./villa-rent-detail.component.css']
})
export class VillaRentDetailComponent implements OnInit {

  villaRent: VillaRent;
  compatibles: VillaRent[];
  constructor(private villasRentService: VillasRentService,
    private route: ActivatedRoute) { }
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
    this.sub = this.villasRentService.getElement(id).subscribe(
      data => {
        this.villaRent = data;
        this.compatibles = data['compatibles'];
      });
  }
 }