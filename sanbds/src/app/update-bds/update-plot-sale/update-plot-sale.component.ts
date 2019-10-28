import { Component, OnInit } from '@angular/core';
import { PlotSale } from 'src/app/plots-sale/plot-sale.model';
import { UpdateBdsService } from 'src/app/update-bds/service/update-bds.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-plot-sale',
  templateUrl: './update-plot-sale.component.html',
  styleUrls: ['./update-plot-sale.component.css']
})
export class UpdatePlotSaleComponent implements OnInit {
  public plotSaleForm: FormGroup;
  public plotSale: PlotSale;
  public sub: Subscription
  constructor(
    private updateBdsService: UpdateBdsService,
    private route: ActivatedRoute,
    private _location: Location,
    private formBiulder: FormBuilder, ) { }

  ngOnInit() {
    this.plotSale = new PlotSale();
    this.loadData();
    this.plotSaleForm = this.formBiulder.group({
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
      delete: [''],
    })
  }
  loadData() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.sub = this.updateBdsService.getElementPlotSale(id).subscribe(
      data => {
        this.plotSale = data['plots'];
        this.plotSaleForm.patchValue(this.plotSale)
      })

  }
  onUpdatePlotSale() {
    console.log(this.plotSaleForm.value);
    this.updateBdsService.updatePlotSale(this.plotSaleForm.value).subscribe(
      data => { this.plotSale }
    );
  }
  backClicked() {
    this._location.back();
  }

}
