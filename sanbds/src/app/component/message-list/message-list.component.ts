import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from 'src/app/models/chat-message';
import { ChatService } from 'src/app/service/chat.service';
import { AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit,OnChanges {

  messages: Observable<ChatMessage[]>;
  mang:any[];

  constructor(private chat: ChatService) { }

  ngOnInit() {
    
    this.messages = this.chat.getMessages().valueChanges();
  }

  ngOnChanges() {
    this.messages = this.chat.getMessages().valueChanges();
    
  }

}
