import { Component, OnInit, Input } from '@angular/core';
import { ApartmentRent } from 'src/app/apartment-rent/apartment-rent';
import { HouseRent } from 'src/app/houses-rent/house-rent';
import { PlotRent } from 'src/app/plots-rent/plot-rent.model';
import { VillaRent } from 'src/app/villa-rent/villa-rent.model';
import { ApartmentRentService } from 'src/app/apartment-rent/apartment-rent.service';
import { Subscription } from 'rxjs';
import { VillasRentService } from 'src/app/villa-rent/villas-rent.service';
import { HouseRentService } from 'src/app/houses-rent/house-rent.service';
import { PlotsRentService } from 'src/app/plots-rent/plots-rent.service';

@Component({
  selector: 'app-rent-page',
  templateUrl: './rent-page.component.html',
  styleUrls: ['./rent-page.component.css']
})
export class RentPageComponent implements OnInit {
  
  villaRent: VillaRent[];
  apartmentRent: ApartmentRent[];
  houseRent: HouseRent[];
  plotRent: PlotRent[];
  sub: Subscription;
  public v :number = 1;
  public h :number = 1;
  public a :number = 1;
  public p :number = 1;
  constructor(
    private apartmentRentService: ApartmentRentService,
    private villaRentService: VillasRentService,
    private houseRentService: HouseRentService,
    private plotRentService: PlotsRentService
  ) { }

  ngOnInit() {
    this.sub = this.apartmentRentService.getApartmentRents().subscribe(
      data => {
      this.apartmentRent = data
      });
    this.sub = this.villaRentService.getList().subscribe(
      data => {
      this.villaRent = data
      });
    this.sub = this.houseRentService.getHouseRent().subscribe(
      data => {
      this.houseRent = data
      });
    this.sub = this.plotRentService.getPlotRent().subscribe(
      data => {
      this.plotRent = data
      });

  }

}
