import { Component, OnInit, Input } from '@angular/core';
import { PlotSale } from '../plot-sale.model';

@Component({
  selector: 'app-plot-sale-poster',
  templateUrl: './plot-sale-poster.component.html',
  styleUrls: ['./plot-sale-poster.component.css']
})
export class PlotSalePosterComponent implements OnInit {

  @Input() plotSale: PlotSale;
  @Input() images: [];
  constructor() { }

  ngOnInit() {
  }

}
