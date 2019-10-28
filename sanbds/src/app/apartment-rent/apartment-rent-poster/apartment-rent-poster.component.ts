import { Component, OnInit, Input } from '@angular/core';
import { ApartmentRent } from '../apartment-rent';

@Component({
  selector: 'app-apartment-rent-poster',
  templateUrl: './apartment-rent-poster.component.html',
  styleUrls: ['./apartment-rent-poster.component.css']
})
export class ApartmentRentPosterComponent implements OnInit {

  @Input() apartment: ApartmentRent;
  @Input() images :[];
  constructor() { }
  ngOnInit() {
  }

}
