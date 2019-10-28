import { Component, OnInit } from '@angular/core';
import { VillasSaleService } from '../villas-sale.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { VillaSale } from '../villa-sale.model';
@Component({
  selector: 'app-villa-sale-detail',
  templateUrl: './villa-sale-detail.component.html',
  styleUrls: ['./villa-sale-detail.component.css']
})
export class VillaSaleDetailComponent implements OnInit {

  villaSale: VillaSale;
  compatibles: VillaSale[];
  sub: Subscription;
  constructor(
    private villaSaleService: VillasSaleService,
    private route: ActivatedRoute) { }


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
    this.sub = this.villaSaleService.getElement(id).subscribe(
      data => {
        this.villaSale = data;
        this.compatibles = data['compatibles'];
      });
  }

}
