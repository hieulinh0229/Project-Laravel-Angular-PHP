import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthUser } from 'app/_models/auth-user';
import { Subscription } from 'rxjs';
import { UserService } from 'app/_services/user.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public displayedColumns = ['id', 'ho', 'name', 'email','edit'];
  public dataSource: MatTableDataSource<AuthUser>;
  userList: AuthUser[] = [];
  sub: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public routerDetail = "/user-profile";

  constructor( public userService: UserService) { }

  ngOnInit() {
    this.sub = this.userService.getListUser().subscribe(
      data => {this.userList = data;
        this.dataSource = new MatTableDataSource<AuthUser>(this.userList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
