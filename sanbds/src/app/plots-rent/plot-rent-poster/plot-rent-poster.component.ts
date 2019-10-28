import { Component, OnInit, Input } from '@angular/core';
import { PlotRent } from '../plot-rent.model';

@Component({
  selector: 'app-plot-rent-poster',
  templateUrl: './plot-rent-poster.component.html',
  styleUrls: ['./plot-rent-poster.component.css']
})
export class PlotRentPosterComponent implements OnInit {

  @Input() plotRent: PlotRent;
  @Input() images: [];
  constructor() { }

  ngOnInit() {
  }

}
