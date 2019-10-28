import { Component, OnInit } from '@angular/core';
import { VillaSaleService } from 'app/_services/_realestate-services/villa-sale.service';
import { BaseReListComponent } from 'app/real-estate/_base-real-estate/base-re-list.component';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 're-villa-sale-list',
  templateUrl: '../../_base-real-estate/re-list-template.html',
})
export class VillaSaleListComponent extends BaseReListComponent implements OnInit {

  title = "Biệt thự";
  displayedColumns = ['id', 'diachi', 'province', 'gia', 'trangthai', 'published'];
  elements: any[] = [];
  dataSource: MatTableDataSource<any>;
  sub: Subscription;
  public routerUpdating = "/update-villa-sale";


  constructor(
    public service: VillaSaleService,
    public toastr : ToastrService
  ) {
    super();
  }
    
  ngOnInit() {
    this.loadData();
  }


}
