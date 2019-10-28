import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ApartmentRentService } from 'src/app/apartment-rent/apartment-rent.service';
import { VillasRentService } from 'src/app/villa-rent/villas-rent.service';
import { HouseRentService } from 'src/app/houses-rent/house-rent.service';
import { PlotsRentService } from 'src/app/plots-rent/plots-rent.service';
import { VillaRent } from 'src/app/villa-rent/villa-rent.model';
import { ApartmentRent } from 'src/app/apartment-rent/apartment-rent';
import { HouseRent } from 'src/app/houses-rent/house-rent';
import { PlotRent } from 'src/app/plots-rent/plot-rent.model';
import { ApartmentSaleService } from 'src/app/apartment-sale/apartment-sale.service';
import { VillasSaleService } from 'src/app/villas-sale/villas-sale.service';
import { HousesSaleService } from 'src/app/houses-sale/houses-sale.service';
import { PlotsSaleService } from 'src/app/plots-sale/plots-sale.service';
import { ApartmentSale } from 'src/app/apartment-sale/apartment-sale';
import { VillaSale } from 'src/app/villas-sale/villa-sale.model';
import { HouseSale } from 'src/app/houses-sale/house-sale.model';
import { PlotSale } from 'src/app/plots-sale/plot-sale.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;
  sub: Subscription;
  userProfile: any;
  user: any;
  villaRent: VillaRent[];
  apartmentRent: ApartmentRent[];
  houseRent: HouseRent[];
  plotRent: PlotRent[];
  apartmentSale: ApartmentSale[];
  villaSale: VillaSale[];
  houseSale: HouseSale[];
  plotSale: PlotSale[];
  public v: number = 1;
  public h: number = 1;
  public a: number = 1;
  public p: number = 1;
  public q: number = 1;
  public w: number = 1;
  public e: number = 1;
  public r: number = 1;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location,
    private toastr: ToastrService,
    private apartmentRentService: ApartmentRentService,
    private villaRentService: VillasRentService,
    private houseRentService: HouseRentService,
    private plotRentService: PlotsRentService,
    private apartmentSaleService: ApartmentSaleService,
    private villaSaleService: VillasSaleService,
    private houseSaleService: HousesSaleService,
    private plotSaleService: PlotsSaleService,

  ) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => this.user = user);
    console.log(this.user.id);
    this.userForm = this.fb.group({
      id: [null],
      ho: [null],
      name: [null],
      sdt: [null],
      email: [null],
      images: [null],
    });
    this.userProfile = this.authService.currentUserValue;
    this.userForm.patchValue(this.userProfile);
    this.sub = this.apartmentRentService.getApartmentRents().subscribe(
      data => {
        this.apartmentRent = data;
        console.log(this.apartmentRent)
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

  onUpdateUser() {
    let confirmed = confirm('Bạn thật sự muốn thay dổi');
    if (!confirmed) {
      return;
    };
    console.log();
    this.authService.updateUserProfile(this.userForm.value).subscribe(
      data => {
        this.userProfile = data;
        this.toastr.success("", "Cập nhật thông tin thành công", { positionClass: "toast-bottom-right" });
      },
      err => {
        this.toastr.error("", "Cập nhật không thành công", { positionClass: "toast-bottom-right" });
      }
    )
  }
  back(){
    this.location.back()
  }

}
