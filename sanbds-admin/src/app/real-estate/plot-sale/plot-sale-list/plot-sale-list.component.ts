import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { PlotSaleService } from 'app/_services/_realestate-services/plot-sale.service';
import { BaseReListComponent } from 'app/real-estate/_base-real-estate/base-re-list.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 're-plot-sale-list',
  templateUrl: '../../_base-real-estate/re-list-template.html',
})
export class PlotSaleListComponent extends BaseReListComponent implements OnInit {

  title = "Đất nền";
  displayedColumns = ['id', 'diachi', 'province', 'gia', 'trangthai', 'published'];
  elements: any[] = [];
  dataSource: MatTableDataSource<any>;
  sub: Subscription;
  public routerUpdating = "/update-plot-sale";

  constructor(
    public service: PlotSaleService,
    public toastr : ToastrService
  ) {
    super();
  }
    
  ngOnInit() {
    this.loadData();
  }
}
