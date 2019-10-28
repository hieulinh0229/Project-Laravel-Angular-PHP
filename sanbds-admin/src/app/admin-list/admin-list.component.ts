import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthUser } from 'app/_models/auth-user';
import { Subscription } from 'rxjs';
import { UserService } from 'app/_services/user.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  public displayedColumns = ['id', 'ho', 'name', 'email','edit'];
  adminList: any[] = [];
  sub: Subscription;
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public routerDetail = "/admin-profile";

  constructor(private adminService: UserService) { }

  ngOnInit() {
    this.sub = this.adminService.getListAdmin().subscribe(
      data => {this.adminList = data;
      this.dataSource = new MatTableDataSource<any>(this.adminList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }
  
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
