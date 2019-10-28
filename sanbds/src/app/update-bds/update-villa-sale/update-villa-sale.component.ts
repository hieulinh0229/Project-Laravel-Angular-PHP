import { Component, OnInit } from '@angular/core';
import { VillaSale } from 'src/app/villas-sale/villa-sale.model';
import { UpdateBdsService } from 'src/app/update-bds/service/update-bds.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-villa-sale',
  templateUrl: './update-villa-sale.component.html',
  styleUrls: ['./update-villa-sale.component.css']
})
export class UpdateVillaSaleComponent implements OnInit {
  public villaSaleForm: FormGroup;
  public villaSale: VillaSale;
  public subscription: Subscription
  public sub: Subscription
  private routes: Router
  constructor(private updateBdsService: UpdateBdsService,
    private route: ActivatedRoute,
    private _location: Location,
    private formBiulder: FormBuilder, ) { }

  ngOnInit() {
    this.villaSale = new VillaSale();
    this.loadData();
    this.villaSaleForm = this.formBiulder.group({
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
    })
  }
  loadData() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.sub = this.updateBdsService.getElementVillaSale(id).subscribe(
      data => {
        this.villaSale = data;
        this.villaSaleForm.patchValue(this.villaSale)
      })

  }
  onUpdateVillaSale() {
    console.log(this.villaSaleForm.value);
    this.updateBdsService.updateVillaSale(this.villaSaleForm.value).subscribe(
      data => { this.villaSale }
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
