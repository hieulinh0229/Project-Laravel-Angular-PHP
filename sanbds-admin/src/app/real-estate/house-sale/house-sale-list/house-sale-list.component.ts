import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { HouseSaleService } from 'app/_services/_realestate-services/house-sale.service';
import { BaseReListComponent } from 'app/real-estate/_base-real-estate/base-re-list.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 're-house-sale-list',
  templateUrl: '../../_base-real-estate/re-list-template.html',
})
export class HouseSaleListComponent extends BaseReListComponent implements OnInit {

  title = "Nhà phố";
  displayedColumns = ['id', 'diachi', 'province', 'gia', 'trangthai', 'published'];
  elements: any[] = [];
  dataSource: MatTableDataSource<any>;
  sub: Subscription;

  public routerUpdating = "/update-house-sale";

  constructor(
    public service: HouseSaleService,
    public toastr : ToastrService,
  ) {
    super();
  }
    
  ngOnInit() {
    this.loadData();
  }

}
