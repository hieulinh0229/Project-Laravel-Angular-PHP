import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { BaseReListComponent } from 'app/real-estate/_base-real-estate/base-re-list.component';
import { PlotRentService } from 'app/_services/_realestate-services/plot-rent.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 're-plot-rent-list',
  templateUrl: '../../_base-real-estate/re-list-template.html',
})
export class PlotRentListComponent extends BaseReListComponent implements OnInit {

  title = "Đất nền";
  displayedColumns = ['id', 'diachi', 'province', 'gia', 'trangthai', 'published'];
  elements: any[] = [];
  dataSource: MatTableDataSource<any>;
  sub: Subscription;
  public routerUpdating = "/update-plot-rent";
  
  constructor(
    public service: PlotRentService,
    public toastr : ToastrService
  ) { 
    super();
  }
      

  ngOnInit() {
    this.loadData();
  }

}
