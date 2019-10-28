import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CreateService } from 'src/app/create-bds/service/create.service';
import { ApartmentRent } from 'src/app/apartment-rent/apartment-rent';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-apartment-rent',
  templateUrl: './create-apartment-rent.component.html',
  styleUrls: ['./create-apartment-rent.component.css']
})
export class CreateApartmentRentComponent implements OnInit {

  constructor(
    private formBiulder: FormBuilder,
    private createService: CreateService,
    private router: Router,
    private authService: AuthService,
    private toastr :ToastrService,
    private location: Location
  ) { }
  public form: FormGroup;
  public apartmentRent: ApartmentRent[] = [];
  public user: any;
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
      tenchungcu: [null],
      dientich: [null, [Validators.required]],
      sotang: [null],
      phongngu: [null],
      phongtam: [null],
      diachi: [null, [Validators.required]],
      mota: [null],
      namxaydung: [null],
      phaply: [null],
      thoigianthue: [null],
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
    this.createService.createApartmentRent(this.form.value).subscribe(
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
