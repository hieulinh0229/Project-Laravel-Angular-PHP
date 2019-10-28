import { Component, OnInit } from '@angular/core';
import { BaseReListComponent } from 'app/real-estate/_base-real-estate/base-re-list.component';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { ApartmentRentService } from 'app/_services/_realestate-services/apartment-rent.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 're-apartment-rent-list',
  templateUrl: '../../_base-real-estate/re-list-template.html',
})
export class ApartmentRentListComponent extends BaseReListComponent implements OnInit {

  title = "Căn hộ";
  displayedColumns = ['id', 'diachi', 'province', 'gia', 'trangthai', 'published'];
  elements: any[] = [];
  dataSource: MatTableDataSource<any>;
  sub: Subscription;

  public routerUpdating = "/update-apartment-rent";

  constructor(
    public service: ApartmentRentService,
    public toastr: ToastrService
  ) {
    super();
  }

  ngOnInit() {
    this.loadData();
  }

}
