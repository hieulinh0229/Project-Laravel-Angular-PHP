import { Component, OnInit } from '@angular/core';
import { UpdateBdsService } from 'src/app/update-bds/service/update-bds.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApartmentSale } from 'src/app/apartment-sale/apartment-sale';

@Component({
  selector: 'app-update-apartment-sale',
  templateUrl: './update-apartment-sale.component.html',
  styleUrls: ['./update-apartment-sale.component.css']
})

export class UpdateApartmentSaleComponent implements OnInit {

  public apartmentSaleForm: FormGroup;
  public apartmentSale: ApartmentSale;
  public subscription: Subscription
  public sub: Subscription
  private routes: Router

  constructor(private updateBdsService: UpdateBdsService,
    private route: ActivatedRoute,
    private _location: Location,
    private formBiulder: FormBuilder, ) { }

  ngOnInit() {
    this.apartmentSale = new ApartmentSale();
    this.loadData();
    this.apartmentSaleForm = this.formBiulder.group({
      id: [''],
      gia: ['', [Validators.required]],
      ngayhethan: [''],
      trangthai: [false],
      huongnha: [''],
      chieudai: ['',],
      chieurong: [''],
      tenchungcu: [''],
      dientich: ['', [Validators.required]],
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
    this.sub = this.updateBdsService.getElementApartmentSale(id).subscribe(
      data => {
        this.apartmentSale = data['apartment'];
        this.apartmentSaleForm.patchValue(this.apartmentSale)
      })
  }

  onUpdateApartmentSale() {
    this.updateBdsService.updateApartmentSale(this.apartmentSaleForm.value).subscribe(
      data => { this.apartmentSale }),
      alert('Bạn thật sự muốn thay đổi');
    //   this.routes.navigateByUrl('');
  }
  
  backClicked() {
    this._location.back();
  }

}