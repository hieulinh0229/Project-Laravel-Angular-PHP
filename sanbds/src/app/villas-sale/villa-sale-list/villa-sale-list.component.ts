import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VillaSale } from '../villa-sale.model';
import { Subscription } from 'rxjs';
import { VillasSaleService } from '../villas-sale.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MiniFormService } from 'src/app/mini-form/mini-form.service';
@Component({
  selector: 'app-villa-sale-list',
  templateUrl: './villa-sale-list.component.html',
  styleUrls: ['./villa-sale-list.component.css']
})
export class VillaSaleListComponent implements OnInit {
  public formSeach: FormGroup;
  villaSaleList: VillaSale[] =[];
  villaSaleListRaw: VillaSale[] =[];
  districts = [];
  allDistricts = [];
  provinces = [];
  sub: Subscription;

  @Output() bindToParent = new EventEmitter<number>();
  checkedProvince = null;

  constructor(
    private formBiulder: FormBuilder,
    private miniFormService: MiniFormService,
    private villaSaleService: VillasSaleService) { }

  ngOnInit() {

    this.formSeach = this.formBiulder.group({
      gia: [null],
      dientich: [null],
      phongngu: [null],
      phaply: [null],
      huongnha: [null],
      district_id: [null],
    })
    this.sub = this.villaSaleService.getList().subscribe(
      data => 
      {
        for(let i =0; i<=data.length; i++ ){
          if(!data[i].trangthai){
         this.villaSaleList.push(data[i]),
            this.villaSaleListRaw.push(data[i])
          }
        }
      }
    );
    this.miniFormService.getLocal().subscribe(
      data => {
        this.allDistricts = data['districts'];
        this.provinces = data['provinces'];
      },
    )
  }
  kiemTra(nha) {
    const { gia, dientich, phongngu, phaply, huongnha, district_id } = this.formSeach.value;
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
    if (phongngu != null) {
      if (nha.phongngu != phongngu) {
        return false;
      }
    }

    if (huongnha != null) {
      if (nha.huong != huongnha) {
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
      if (gianha < (gia - 0.5)) {
        return false;
      }
      if (gianha > gia) {
        return false;
      }
    }

    return true;
  }
  onSearch() {
    this.villaSaleList = this.villaSaleListRaw.filter(nha => this.kiemTra(nha));


  }

  filterDistricts(event) {
    this.checkedProvince = event.target.value;
    this.districts = this.allDistricts.filter(d => d.province_id == this.checkedProvince);
  }

  checkDistrict(event) {
    this.bindToParent.emit(event.target.value);
  }
}