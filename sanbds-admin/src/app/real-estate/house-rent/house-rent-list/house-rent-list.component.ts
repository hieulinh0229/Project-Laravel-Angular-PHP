import { Component, OnInit } from '@angular/core';
import { BaseReListComponent } from 'app/real-estate/_base-real-estate/base-re-list.component';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { HouseRentService } from 'app/_services/_realestate-services/house-rent.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 're-house-rent-list',
  templateUrl: '../../_base-real-estate/re-list-template.html',
})
export class HouseRentListComponent extends BaseReListComponent implements OnInit {

  title = "Nhà phố";
  displayedColumns = ['id', 'diachi', 'province', 'gia', 'trangthai', 'published'];
  elements: any[] = [];
  dataSource: MatTableDataSource<any>;
  sub: Subscription;
  public routerUpdating = "/update-house-rent";
  
  constructor(
    public service: HouseRentService,
    public toastr : ToastrService
  ) {
    super();
   }

  ngOnInit() {
    this.loadData();
  }

}
