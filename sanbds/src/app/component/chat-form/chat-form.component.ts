import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  textMessage: string;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.chatService.sendMessage(this.textMessage)
    this.textMessage = '';
  }

  handleSubmit(event) {
    if (event.keyCode == 13) {
      this.sendMessage();
    }
  }

}
