import { Component, OnInit, Input } from '@angular/core';
import { VillaSale } from '../villa-sale.model';

@Component({
  selector: 'app-villa-sale-poster',
  templateUrl: './villa-sale-poster.component.html',
  styleUrls: ['./villa-sale-poster.component.css']
})
export class VillaSalePosterComponent implements OnInit {
@Input() villa:VillaSale;
@Input() images:[];
  constructor() { }

  ngOnInit() {
  }

}
