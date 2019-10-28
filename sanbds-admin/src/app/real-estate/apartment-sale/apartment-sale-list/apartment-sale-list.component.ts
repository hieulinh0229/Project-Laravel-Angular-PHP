// Yêu cầu sửa lại @Component-selector, title, DI service,

import { Component, OnInit } from '@angular/core';
import { BaseReListComponent } from 'app/real-estate/_base-real-estate/base-re-list.component';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { ApartmentSaleService } from 'app/_services/_realestate-services/apartment-sale.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 're-apartment-sale-list',
  templateUrl: '../../_base-real-estate/re-list-template.html',
})
export class ApartmentSaleListComponent extends BaseReListComponent implements OnInit {

  title = "Căn hộ";
  displayedColumns = ['id', 'diachi', 'province', 'gia', 'trangthai', 'published'];
  elements: any[] = [];
  dataSource: MatTableDataSource<any>;
  sub: Subscription;

  public routerUpdating = "/update-apartment-sale";

  constructor(
    public service: ApartmentSaleService,
    public router: Router,
    public toastr : ToastrService
  ) {
    super();
  }
    
  ngOnInit() {
    this.loadData();
  }

}
