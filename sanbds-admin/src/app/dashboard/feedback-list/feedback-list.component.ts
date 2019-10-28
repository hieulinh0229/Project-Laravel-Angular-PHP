import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthUser } from 'app/_models/auth-user';
import { Subscription } from 'rxjs';
import { UserService } from 'app/_services/user.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FeedbackService } from '../feedback.service';
import { Feedback } from 'app/_models/feedback.model';
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent implements OnInit {

  public displayedColumns = ['id', 'tieude','trangthai', 'thaotac'];
  // feedbackList: any[] = [];
  sub: Subscription;
  feedbackList:Feedback[]
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public routerDetail = "/feedback";

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.sub = this.feedbackService.getList().subscribe(
      data => {this.feedbackList = data;
      this.dataSource = new MatTableDataSource<any>(this.feedbackList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.feedbackList)
      })
  }
  
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
