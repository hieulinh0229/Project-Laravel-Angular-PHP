import { Component, OnInit } from '@angular/core';
import { BaseReListComponent } from 'app/real-estate/_base-real-estate/base-re-list.component';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { VillaRentService } from 'app/_services/_realestate-services/villa-rent.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 're-villa-rent-list',
  templateUrl: '../../_base-real-estate/re-list-template.html',
})
export class VillaRentListComponent extends BaseReListComponent implements OnInit {

  title = "Biệt thự";
  displayedColumns = ['id', 'diachi', 'province', 'gia', 'trangthai', 'published'];
  elements: any[] = [];
  dataSource: MatTableDataSource<any>;
  sub: Subscription;
  public routerUpdating = "/update-villa-rent";

  constructor(
    public service: VillaRentService,
    public toastr : ToastrService
  ) {
    super();
  }


  ngOnInit() {
    this.loadData();
  }

}
