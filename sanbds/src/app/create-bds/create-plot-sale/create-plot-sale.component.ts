import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateService } from 'src/app/create-bds/service/create.service';
import { PlotSale } from 'src/app/plots-sale/plot-sale.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import {  ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-plot-sale',
  templateUrl: './create-plot-sale.component.html',
  styleUrls: ['./create-plot-sale.component.css']
})

export class CreatePlotSaleComponent implements OnInit {

  constructor(
    private formBiulder: FormBuilder,
    private createService: CreateService,
    private authService: AuthService,
    private toastr :ToastrService,
    private location :Location

  ) { }
  public form: FormGroup;
  public plotSale: PlotSale[] = [];
  public user:any;

  ngOnInit() {
    this.authService.currentUser.subscribe(user => this.user = user);
    console.log(this.user.id);
    this.form = this.formBiulder.group({
      gia: [null, [Validators.required ]],
      ngayhethan: [null],
      trangthai: [false],
      huong: [null],
      chieudai: [null, ],
      chieurong: [null],
      dientich: [null, [Validators.required]],
      diachi: [null, [Validators.required]],
      mota: [null],
      phaply: [null],
      images: [null,],
      user_id: [(this.user.id)],
      district_id: [null, [Validators.required]]
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.createService.createPlotRent(this.form.value).subscribe(
      data => {
        this.toastr.success('Tạo mới thành công');
        this.location.back()

         },
         err=>this.toastr.error("Mất kết nối")
    );
  }

  setDistrict(id) {
    this.form.get('district_id').setValue(id);
    console.log(this.form.value);
  }

  setImageUrls(list) {
    console.log(list);
    this.form.get('images').setValue(list);
  }

}