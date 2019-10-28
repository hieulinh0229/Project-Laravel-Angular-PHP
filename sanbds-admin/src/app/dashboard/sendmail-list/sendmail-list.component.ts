import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SendMail } from 'app/_models/sendmail.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SendmailService } from '../sendmail.service';

@Component({
  selector: 'app-sendmail-list',
  templateUrl: './sendmail-list.component.html',
  styleUrls: ['./sendmail-list.component.scss']
})
export class SendmailListComponent implements OnInit {

  public displayedColumns = ['id','email','ngayhen','thaotac'];
  sub: Subscription;
  sendmailList: SendMail[];
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public routerDetail = "/sendmail";

  constructor(private sendmailService: SendmailService) { }

  ngOnInit() {
    this.sub = this.sendmailService.getList().subscribe(
      data =>{
        this.sendmailList = data;
        this.dataSource = new MatTableDataSource<any>(this.sendmailList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

}
