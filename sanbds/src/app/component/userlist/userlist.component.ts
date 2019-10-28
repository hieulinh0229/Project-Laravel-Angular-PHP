import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: firebase.User[];
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getUsers().valueChanges().subscribe(
      users => this.users = users
    )
  }

}
