import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateService } from 'src/app/create-bds/service/create.service';
import { VillaSale } from 'src/app/villas-sale/villa-sale.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-villa-sale',
  templateUrl: './create-villa-sale.component.html',
  styleUrls: ['./create-villa-sale.component.css']
})
export class CreateVillaSaleComponent implements OnInit {

  constructor(
    private formBiulder: FormBuilder,
    private createService: CreateService,
    private authService: AuthService,
    private toastr :ToastrService,
    private location:Location
  ) { }
  public form: FormGroup;
  public villSale: VillaSale[] = [];
  public user:any
  ngOnInit() {
    this.authService.currentUser.subscribe(user => this.user = user);
    console.log(this.user.id);
    this.form = this.formBiulder.group({
      gia: [null, [Validators.required]],
      ngayhethan: [null],
      trangthai: [false],
      huongnha: [null],
      chieudai: [null,],
      chieurong: [null],
      dientich: [null],
      dientichtongsan: [null, [Validators.required]],
      sotang: [null],
      phongngu: [null],
      phongtam: [null],
      diachi: [null, [Validators.required]],
      mota: [null],
      namxaydung: [null],
      phaply: [null],
      garage: [null],
      sanvuon: [null],
      beboi: [null],
      images: [null],
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
