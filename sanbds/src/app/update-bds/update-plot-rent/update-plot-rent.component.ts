import { Component, OnInit } from '@angular/core';
import { PlotRent } from 'src/app/plots-rent/plot-rent.model';
import { UpdateBdsService } from 'src/app/update-bds/service/update-bds.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-plot-rent',
  templateUrl: './update-plot-rent.component.html',
  styleUrls: ['./update-plot-rent.component.css']
})
export class UpdatePlotRentComponent implements OnInit {

  public plotRentForm: FormGroup;
  public plotRent: PlotRent;
  public sub: Subscription
  constructor(
    private updateBdsService: UpdateBdsService,
    private route: ActivatedRoute,
    private _location: Location,
    private formBiulder: FormBuilder, ) { }

  ngOnInit() {
    this.plotRent = new PlotRent();
    this.loadData();
    this.plotRentForm = this.formBiulder.group({
      id: [''],
      gia: ['', [Validators.required ]],
      ngayhethan: [''],
      trangthai: [false],
      huong: [''],
      chieudai: ['', ],
      chieurong: [''],
      dientich: ['', [Validators.required]],
      diachi: ['', [Validators.required]],
      mota: [''],
      phaply: [''],
      images: [''],
      thoigianthue: [''],
      delete: [''],
    })
  }
  loadData() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.sub = this.updateBdsService.getElementPlotRent(id).subscribe(
      data => {
        this.plotRent = data['plots'];
        this.plotRentForm.patchValue(this.plotRent)
      })

  }
  onUpdatePlotRent() {
    console.log(this.plotRentForm.value);
    this.updateBdsService.updatePlotRent(this.plotRentForm.value).subscribe(
      data => { this.plotRent }
    );
  }
  backClicked() {
    this._location.back();
  }

}