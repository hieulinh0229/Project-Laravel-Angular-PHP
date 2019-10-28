
import { Component, OnInit } from '@angular/core';
import { PlotsRentService } from '../plots-rent.service';
import { Subscription } from 'rxjs';
import { PlotRent } from '../plot-rent.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-plot-rent-detail',
  templateUrl: './plot-rent-detail.component.html',
  styleUrls: ['./plot-rent-detail.component.css']
})
export class PlotRentDetailComponent implements OnInit {
  sub: Subscription;
  plotRent : PlotRent;
  compatibles: PlotRent[];
  constructor(
    private plotRentService: PlotsRentService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }

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
   this.sub = this.plotRentService.getPlotRentById(id).subscribe(
     data => {
       this.plotRent = data;
       this.compatibles = data['compatibles'];
     });
 }

}