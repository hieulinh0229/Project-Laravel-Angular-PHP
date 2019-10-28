import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { ChatMessage } from '../models/chat-message';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: firebase.User;
  chatMessages: AngularFireList<ChatMessage>;
  chatMessage: ChatMessage;
  userName: any;
  users: AngularFireList<firebase.User>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });

    this.users = this.getUsers();
  }

  getUser(): AngularFireObject<firebase.User> {
    const userEmail = this.user.email;
    const path = 'users';
    let usersRef = firebase.database().ref(path);
    let id;
    usersRef.child(path).orderByChild('email').equalTo(userEmail).on("value", function (snapshot) {
      console.log(snapshot.val());
      snapshot.forEach(function (data) {
        id = data.key;
      });
    });

    return this.db.object(`${path}/${id}`);
  }

  getUsers(): AngularFireList<firebase.User> {
    const path = 'users';
    return this.db.list(path);
  }

  async sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    return this.chatMessages.push({
      message: msg,
      timeSent: new Date(timestamp),
      email: email
    });
  }

  getMessages(): AngularFireList<ChatMessage> {
    // query to create our message feed binding
   
    return this.db.list('messages',
      ref => ref.limitToLast(8).orderByKey()
    );
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();
    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();

    return (date + ' ' + time);
  }

  
}
