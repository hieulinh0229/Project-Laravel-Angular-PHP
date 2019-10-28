import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from 'src/app/models/chat-message';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-message-show',
  templateUrl: './message-show.component.html',
  styleUrls: ['./message-show.component.css']
})
export class MessageShowComponent implements OnInit {

  @Input() message: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isOwnMessage: boolean;
  ownEmail: string;

  constructor(private authService: AuthService) { 
    authService.authUser().subscribe(user => {
      this.ownEmail = user.email;
      this.isOwnMessage = this.ownEmail === this.userEmail;
    });
  }

  ngOnInit(message = this.message) {
    this.messageContent = message.message;
    this.timeStamp = message.timeSent;
    this.userEmail = message.email;
    this.userName = message.userName;
  }

}
