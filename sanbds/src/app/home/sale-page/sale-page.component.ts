import { Component, OnInit } from '@angular/core';
import { VillaSale } from 'src/app/villas-sale/villa-sale.model';
import { ApartmentSale } from 'src/app/apartment-sale/apartment-sale';
import { HouseSale } from 'src/app/houses-sale/house-sale.model';
import { PlotSale } from 'src/app/plots-sale/plot-sale.model';
import { ApartmentSaleService } from 'src/app/apartment-sale/apartment-sale.service';
import { VillasSaleService } from 'src/app/villas-sale/villas-sale.service';
import { HousesSaleService } from 'src/app/houses-sale/houses-sale.service';
import { PlotsSaleService } from 'src/app/plots-sale/plots-sale.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.css']
})
export class SalePageComponent implements OnInit {

  apartmentSale: ApartmentSale[];
  villaSale: VillaSale[];
  houseSale: HouseSale[];
  plotSale: PlotSale[];
  sub: Subscription;
  public v :number = 1;
  public h :number = 1;
  public a :number = 1;
  public p :number = 1;
  constructor(
    private apartmentSaleService: ApartmentSaleService,
    private villaSaleService: VillasSaleService,
    private houseSaleService: HousesSaleService,
    private plotSaleService: PlotsSaleService
  ) { }

  ngOnInit() {
    this.sub = this.apartmentSaleService.getApartmentSales().subscribe(
      data => {
      this.apartmentSale = data
      });
    this.sub = this.villaSaleService.getList().subscribe(
      data => {
      this.villaSale = data
      });
    this.sub = this.houseSaleService.getHouseSale().subscribe(
      data => {
      this.houseSale = data
      });
    this.sub = this.plotSaleService.getPlotSale().subscribe(
      data => {
      this.plotSale = data
      });
  }

}
