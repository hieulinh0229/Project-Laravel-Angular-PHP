import { PlotSale } from '../plot-sale.model';
import { PlotsSaleService } from '../plots-sale.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MiniFormService } from 'src/app/mini-form/mini-form.service';
@Component({
  selector: 'app-plots-sale-list',
  templateUrl: './plots-sale-list.component.html',
  styleUrls: ['./plots-sale-list.component.css']
})
export class PlotsSaleListComponent implements OnInit {

  plotSaleList: PlotSale[] =[];
  sub: Subscription;
  @Output() bindToParent = new EventEmitter<number>();
  checkedProvince = null;
  plotSaleListRaw: PlotSale[] =[];
  districts = [];
  allDistricts = [];
  provinces = [];
  public formSeach: FormGroup;

  constructor(
    private formBiulder: FormBuilder,
    private miniFormService: MiniFormService,
    private plotSaleService: PlotsSaleService) { }

  ngOnInit() {
    this.formSeach = this.formBiulder.group({
      gia: [null],
      dientich: [null],
      phaply: [null],
      huong: [null],
      district_id: [null],
    })
    this.sub = this.plotSaleService.getPlotSale().subscribe(
      data => {
        for(let i =0; i<=data.length; i++ ){
          if(!data[i].trangthai){
         this.plotSaleList.push(data[i]),
            this.plotSaleListRaw.push(data[i])
          }
        }
      }
    )
    this.miniFormService.getLocal().subscribe(
      data => {
        this.allDistricts = data['districts'];
        this.provinces = data['provinces'];
      },
    )
  };
  kiemTra(nha) {
    const { gia, dientich, phaply, huong, district_id } = this.formSeach.value;
    if (dientich != null) {
      if (nha.dientich > dientich) {
        return false;
      }
    }

    if (phaply != null) {
      if (nha.phaply != phaply) {
        return false;
      }
    }

    if (huong != null) {
      if (nha.huong != huong) {
        return false;
      }
    }

    if (district_id != null) {
      if (nha.district_id != district_id) {
        return false;
      }
    }

    if (gia != null) {
      const gianha = parseFloat(nha.gia);
      if (gianha < (gia-0.5)) {
        return false;
      }
      if (gianha > gia ) {
        return false;
      }
    }

    return true;
  }
  onSearch() {
    this.plotSaleList = this.plotSaleListRaw.filter(nha => this.kiemTra(nha));


  }

  filterDistricts(event) {
    this.checkedProvince = event.target.value;
    this.districts = this.allDistricts.filter(d => d.province_id == this.checkedProvince);
  }

  checkDistrict(event) {
    this.bindToParent.emit(event.target.value);
  }
}
