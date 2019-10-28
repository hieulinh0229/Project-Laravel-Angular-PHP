import { Component, OnInit } from '@angular/core';
import { UpdateBdsService } from 'src/app/update-bds/service/update-bds.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApartmentRent } from 'src/app/apartment-rent/apartment-rent';

@Component({
  selector: 'app-update-apartment-rent',
  templateUrl: './update-apartment-rent.component.html',
  styleUrls: ['./update-apartment-rent.component.css']
})

export class UpdateApartmentRentComponent implements OnInit {

  public apartmentRentForm: FormGroup;
  public apartmentRent: ApartmentRent;
  public subscription: Subscription
  public sub: Subscription
  private routes: Router

  constructor(
    private updateBdsService: UpdateBdsService,
    private route: ActivatedRoute,
    private _location: Location,
    private formBiulder: FormBuilder, ) { }

  ngOnInit() {
    this.apartmentRent = new ApartmentRent();
    this.loadData();
    this.apartmentRentForm = this.formBiulder.group({
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
      thoigianthue: [''],
      delete: ['']
    })
  }

  loadData() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.sub = this.updateBdsService.getElementApartmentRent(id).subscribe(
      data => {
        this.apartmentRent = data;
        this.apartmentRentForm.patchValue(this.apartmentRent)
      })

  }

  onUpdateApartmentRent() {
    console.log(this.apartmentRentForm.value);
    this.updateBdsService.updateApartmentRent(this.apartmentRentForm.value).subscribe(
      data => { this.apartmentRent }),
      alert('Bạn thật sự muốn thay đổi');
    // this.routes.navigateByUrl('');
  }
  
  backClicked() {
    this._location.back();
  }

}