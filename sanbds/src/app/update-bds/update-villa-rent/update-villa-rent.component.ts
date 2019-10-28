import { Component, OnInit } from '@angular/core';
import { VillaRent } from 'src/app/villa-rent/villa-rent.model';
import { UpdateBdsService } from 'src/app/update-bds/service/update-bds.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-villa-rent',
  templateUrl: './update-villa-rent.component.html',
  styleUrls: ['./update-villa-rent.component.css']
})
export class UpdateVillaRentComponent implements OnInit {
  public villaRentForm: FormGroup;
  public villaRent: VillaRent;
  public subscription: Subscription
  public sub: Subscription
  private routes: Router
  constructor(private updateBdsService: UpdateBdsService,
    private route: ActivatedRoute,
    private _location: Location,
    private formBiulder: FormBuilder, ) { }
    ngOnInit() {
      this.villaRent = new VillaRent();
      this.loadData();
      this.villaRentForm = this.formBiulder.group({
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
        garage: [''],
        sanvuon: [''],
        beboi: [''],
        images: [''],
        delete: [''],
        thoigianthue: [''],
      })
    }
    loadData() {
      const id = +this.route.snapshot.paramMap.get('id')
      this.sub = this.updateBdsService.getElementVillaRent(id).subscribe(
        data => {
          this.villaRent = data;
          this.villaRentForm.patchValue(this.villaRent)
        })
  
    }
    onUpdateVillaRent() {
      console.log(this.villaRentForm.value);
      this.updateBdsService.updateVillaRent(this.villaRentForm.value).subscribe(
        data => { this.villaRent }
      );
      // this.villaSaleForm.value.id = this.villaSale.id
      // this.sub = this.updateBdsService.updateVillaSale(this.villaSaleForm.value).subscribe((data => {
      //   alert ('Bạn thật sự muốn thay dổi');
      //   this.routes.navigateByUrl('');
      // }))
  
    }
    backClicked() {
      this._location.back();
    }
  }