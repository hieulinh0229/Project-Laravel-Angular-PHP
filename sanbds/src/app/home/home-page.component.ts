import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HousesSaleService } from '../houses-sale/houses-sale.service';
import { HouseSale } from '../houses-sale/house-sale.model';
declare const siteMenuClone : any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  houseSaleList: HouseSale[];
  sub: Subscription;

  constructor(private houseSaleService: HousesSaleService) { }

  ngOnInit() {
    siteMenuClone();
    this.sub = this.houseSaleService.getHouseSale().subscribe(
      data => this.houseSaleList = data
    )
  }

}
