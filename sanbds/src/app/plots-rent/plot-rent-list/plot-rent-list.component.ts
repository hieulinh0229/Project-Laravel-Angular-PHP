import { PlotRent } from '../plot-rent.model';
import { PlotsRentService } from '../plots-rent.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MiniFormService } from 'src/app/mini-form/mini-form.service';
@Component({
  selector: 'app-plot-rent-list',
  templateUrl: './plot-rent-list.component.html',
  styleUrls: ['./plot-rent-list.component.css']
})
export class PlotRentListComponent implements OnInit {

  plotRentList: PlotRent[] =[];
  sub: Subscription;
  plotRentListRaw: PlotRent[] =[];
  @Output() bindToParent = new EventEmitter<number>();
  checkedProvince = null;
  districts = [];
  allDistricts = [];
  provinces = [];
  public formSeach: FormGroup;

  constructor(
    private formBiulder: FormBuilder,
    private miniFormService: MiniFormService,
    private plotRentService: PlotsRentService) { }

  ngOnInit() {
    this.formSeach = this.formBiulder.group({
      gia: [null],
      dientich: [null],
      phaply: [null],
      huong: [null],
      district_id: [null],
    })
    this.sub = this.plotRentService.getPlotRent().subscribe(
        data => {
          for(let i =0; i<=data.length; i++ ){
            if(!data[i].trangthai){
           this.plotRentList.push(data[i]),
              this.plotRentListRaw.push(data[i])
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
    // Diện tích nhỏ hơn thông số đưa vào

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
      if (gianha < (gia - 5)) {
        return false;
      }
      if (gianha > gia) {
        return false;
      }
    }

    return true;
  }
  onSearch() {
    this.plotRentList = this.plotRentListRaw.filter(nha => this.kiemTra(nha));
    console.log(this.plotRentList)
  }

  filterDistricts(event) {
    this.checkedProvince = event.target.value;
    this.districts = this.allDistricts.filter(d => d.province_id == this.checkedProvince);
  }

  checkDistrict(event) {
    this.bindToParent.emit(event.target.value);
  }
}