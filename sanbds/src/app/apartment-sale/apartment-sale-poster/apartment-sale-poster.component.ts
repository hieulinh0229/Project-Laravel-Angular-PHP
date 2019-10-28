import { Component, OnInit, Input } from '@angular/core';
import { ApartmentSale } from '../apartment-sale';

@Component({
  selector: 'app-apartment-sale-poster',
  templateUrl: './apartment-sale-poster.component.html',
  styleUrls: ['./apartment-sale-poster.component.css']
})
export class ApartmentSalePosterComponent implements OnInit {

  @Input() apartment: ApartmentSale;
  @Input() images: [];
  constructor() { }

  ngOnInit() {
  }

}
