import { Component, OnInit, Input } from '@angular/core';
import { HouseRent } from 'src/app/houses-rent/house-rent';

@Component({
  selector: 'app-house-rent-poster',
  templateUrl: './house-rent-poster.component.html',
  styleUrls: ['./house-rent-poster.component.css']
})
export class HouseRentPosterComponent implements OnInit {

  @Input() houseRent: HouseRent;
  @Input() images: [];

  constructor() { }

  ngOnInit() {
  }

}
