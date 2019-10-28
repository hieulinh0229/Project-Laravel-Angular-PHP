import { Component, OnInit } from '@angular/core';
import { PlotsSaleService } from '../plots-sale.service';
import { Subscription } from 'rxjs';
import { PlotSale } from '../plot-sale.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-plot-sale-detail',
  templateUrl: './plot-sale-detail.component.html',
  styleUrls: ['./plot-sale-detail.component.css']
})
export class PlotSaleDetailComponent implements OnInit {
  sub: Subscription;
  plotSale : PlotSale;
  compatibles: PlotSale[];

  constructor(
    private plotSaleService: PlotsSaleService,
    private route: ActivatedRoute,
    private router: Router
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
   this.sub = this.plotSaleService.getPlotSaleById(id).subscribe(
     data => {
       this.plotSale = data;
       this.compatibles = data['compatibles'];
     });
 }
}

