import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
@Input() user: firebase.User;
displayName: string;
status: string;
  constructor() { }

  ngOnInit() {
    this.displayName = this.user.displayName;
  }

  isOnline(): boolean {
    return this.status == 'online';
  }

}
