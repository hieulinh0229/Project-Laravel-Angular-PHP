import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApartmentRentService } from 'app/_services/_realestate-services/apartment-rent.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BaseReUpdateComponent } from 'app/real-estate/_base-real-estate/base-re-update.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-apartment-rent-update',
  templateUrl: './apartment-rent-update.component.html',
  styleUrls: ['./apartment-rent-update.component.scss']
})
export class ApartmentRentUpdateComponent extends BaseReUpdateComponent implements OnInit {

  public form : FormGroup;
  public provinces : any[];
  public rawDistricts : any[];
  public districts: any[];
  public phongtam = [1,2,3];
  public phongngu = [1,2,3,4,5];
  public realestate: any;

  constructor(  
    public service: ApartmentRentService,
    public route: ActivatedRoute,
    public fb: FormBuilder,
    public location : Location,
    public toastr : ToastrService
  ) {     
    super()
  }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      gia: [null, [Validators.required]],
      ngayhethan: [null],
      trangthai: [null, [Validators.required]],
      huongnha: [null],
      chieudai: [null],
      chieurong: [null],
      dientich: [null, [Validators.required]],
      tenchungcu: [null],
      sotang: [null],
      phongngu: [null],
      phongtam: [null],
      images: [null],
      diachi: [null, [Validators.required]],
      mota: [null],
      namxaydung: [null],
      phaply: [null],
      district_id: [null, [Validators.required]],
      province_id: [null],
      published: [null],
      delete_images: [null],
      new_images: [null]
    })
    this.loadLocal();
    this.loadData();
  }

}
