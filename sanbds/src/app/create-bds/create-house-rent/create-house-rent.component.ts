import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateService } from 'src/app/create-bds/service/create.service';
import { HouseRent } from 'src/app/houses-rent/house-rent';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-house-rent',
  templateUrl: './create-house-rent.component.html',
  styleUrls: ['./create-house-rent.component.css']
})
export class CreateHouseRentComponent implements OnInit {

  constructor(
    private formBiulder: FormBuilder,
    private createService: CreateService,
    private router: Router,
    private authService: AuthService,
    private toastr : ToastrService,
    private location :Location
  ) { }
  public form: FormGroup;
  public houseRent: HouseRent[] = []
  user : any;
  ngOnInit() {
    this.authService.currentUser.subscribe(user => this.user = user);
    console.log(this.user.id);
    this.form = this.formBiulder.group({
      gia: [null, [Validators.required ]],
      ngayhethan: [null],
      trangthai: [false],
      huongnha: [null],
      chieudai: [null, ],
      chieurong: [null],
      dientich: [null],
      dientichtongsan: [null, [Validators.required]],
      sotang: [null],
      phongngu: [null],
      phongtam: [null],
      diachi: [null, [Validators.required]],
      mota: [null],
      thoigianthue: [null],
      namxaydung: [null],
      phaply: [null],
      images: [null],
      user_id: [this.user.id],
      district_id: [null, [Validators.required]]
    })
    
    
  }
  onSubmit() {
  
    if (this.form.invalid) {
      return;
    }
    console.log(this.user.id);
    this.createService.createHouseRent(this.form.value).subscribe(
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
