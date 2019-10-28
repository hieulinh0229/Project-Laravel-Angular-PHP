import { Component, OnInit } from '@angular/core';
import { UpdateBdsService } from 'src/app/update-bds/service/update-bds.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { HouseSale } from 'src/app/houses-sale/house-sale.model';
@Component({
  selector: 'app-update-house-sale',
  templateUrl: './update-house-sale.component.html',
  styleUrls: ['./update-house-sale.component.css']
})
export class UpdateHouseSaleComponent implements OnInit {

  public houseSaleForm: FormGroup;
  public houseSale: HouseSale;
  public subscription: Subscription
  public sub: Subscription
  private routes: Router
  constructor(private updateBdsService: UpdateBdsService,
    private route: ActivatedRoute,
    private _location: Location,
    private formBiulder: FormBuilder, ) { }

  ngOnInit() {
    this.houseSale = new HouseSale();
    this.loadData();
    this.houseSaleForm = this.formBiulder.group({
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
      images: [''],
      delete: ['']
    })
  }
  loadData() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.sub = this.updateBdsService.getElementHouseSale(id).subscribe(
      data => {
        this.houseSale = data;
        this.houseSaleForm.patchValue(this.houseSale)
      })

  }
  onUpdateHouseSale() {
    console.log(this.houseSaleForm.value);
    this.updateBdsService.UpdateHouseSale(this.houseSaleForm.value).subscribe(
      data => { this.houseSale }),
      alert('Bạn thật sự muốn thay dổi')
      ;

  }
  backClicked() {
    this._location.back();
  }

}
