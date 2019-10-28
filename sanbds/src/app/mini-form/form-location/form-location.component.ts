import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MiniFormService } from '../mini-form.service';

@Component({
  selector: 'app-form-location',
  templateUrl: './form-location.component.html',
  styleUrls: ['./form-location.component.css']
})
export class FormLocationComponent implements OnInit {
  districts = [];
  allDistricts = [];
  provinces = [];

  @Output() bindToParent = new EventEmitter<number>();
  checkedProvince = null;
  
  constructor(private service: MiniFormService) { }

  ngOnInit() {
    this.service.getLocal().subscribe(
      data => {
        this.allDistricts = data['districts'];
        this.provinces = data['provinces'];
      }
    )
  }

  filterDistricts(event) {
    this.checkedProvince = event.target.value;
    this.districts = this.allDistricts.filter(d => d.province_id == this.checkedProvince);
  }

  checkDistrict(event) {
    this.bindToParent.emit(event.target.value);
  }
}
