import { Component, OnInit } from '@angular/core';
import { UpdateBdsService } from 'src/app/update-bds/service/update-bds.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { HouseRent } from 'src/app/houses-rent/house-rent';
@Component({
  selector: 'app-update-house-rent',
  templateUrl: './update-house-rent.component.html',
  styleUrls: ['./update-house-rent.component.css']
})
export class UpdateHouseRentComponent implements OnInit {
  public houseRentForm: FormGroup;
  public houseRent: HouseRent;
  public subscription: Subscription
  public sub: Subscription
  private routes: Router
  constructor(private updateBdsService: UpdateBdsService,
    private route: ActivatedRoute,
    private _location: Location,
    private formBiulder: FormBuilder, ) { }

  ngOnInit() {
    this.houseRent = new HouseRent();
    this.loadData();
    this.houseRentForm = this.formBiulder.group({
      id: [''],
      gia: ['', [Validators.required]],
      ngayhethan: [''],
      trangthai: [false],
      huongnha: [''],
      chieudai: ['',],
      chieurong: [''],
      dientich: [''],
      dientichtongsan: ['', [Validators.required]],
      sotang: [''],
      phongngu: [''],
      phongtam: [''],
      diachi: ['', [Validators.required]],
      mota: [''],
      namxaydung: [''],
      phaply: [''],
      thoigianthue: [''],
      images: [''],
      delete: ['']
    })
  }
  loadData() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.sub = this.updateBdsService.getElementHouseRent(id).subscribe(
      data => {
        this.houseRent = data;
        this.houseRentForm.patchValue(this.houseRent)
      })

  }
  onUpdateHouseRent() {
    console.log(this.houseRentForm.value);
    this.updateBdsService.updateHouseRent(this.houseRentForm.value).subscribe(
      data => { this.houseRent }),
      alert('Bạn thật sự muốn thay dổi')
      ;

  }
  backClicked() {
    this._location.back();
  }

}
