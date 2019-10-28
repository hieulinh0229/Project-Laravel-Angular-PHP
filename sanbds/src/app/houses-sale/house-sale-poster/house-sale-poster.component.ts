import { Component, OnInit, Input } from '@angular/core';
import { HouseSale} from '../..//houses-sale/house-sale.model';
@Component({
  selector: 'app-house-sale-poster',
  templateUrl: './house-sale-poster.component.html',
  styleUrls: ['./house-sale-poster.component.css']
})
export class HouseSalePosterComponent implements OnInit {

  @Input() houseSale: HouseSale;
  @Input() images: [];
  constructor() { }

  ngOnInit() {
  }

}
