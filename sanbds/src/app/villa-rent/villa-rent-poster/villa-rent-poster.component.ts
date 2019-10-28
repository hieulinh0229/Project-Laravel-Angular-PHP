import { Component, OnInit, Input } from '@angular/core';
import { VillaRent } from '../villa-rent.model';

@Component({
  selector: 'app-villa-rent-poster',
  templateUrl: './villa-rent-poster.component.html',
  styleUrls: ['./villa-rent-poster.component.css']
})
export class VillaRentPosterComponent implements OnInit {
@Input() villa: VillaRent;
@Input() images: [];

  constructor() { }

  ngOnInit() {
  }

}
