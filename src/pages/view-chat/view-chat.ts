import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";
import {UserProvider} from "../../providers/user/user";

@Component({
  selector: 'page-view-chat',
  templateUrl: 'view-chat.html',
})
export class ViewChatPage {
  textAreaMessage: string;
  private chatId;
  private messages = [];

  constructor(public navParams: NavParams,
              protected chatProvider: ChatProvider,
              private userProvider: UserProvider) {
    this.chatId = navParams.get('chatId');
    chatProvider.getChatMessages(this.chatId).then((messages) => {
      this.initializeMessages(messages);
    });
  }

  private initializeMessages(messages) {
    for(let timestamp in messages) {
      let message = messages[timestamp];
      let item = {
        date: new Date(parseInt(timestamp)),
        text: message.text,
        userName: message.userName,
        isSystem: this.isSystem(message),
        isSender: this.isSender(message)
      };
      this.messages.push(item);
    }
  }

  private isSender(message) {
    if(message.userName == 'System') return false;
    return message.uid == this.userProvider.uid;
  }

  private isSystem(message) {
    return message.userName == 'System';
  }

  sendMessage(textArea) {
    this.chatProvider.sendMessage(this.chatId, textArea, this.userProvider.uid);
  }

  onFocus(){
    console.log('On focus');//todo
  }

  attachVideo() {
    console.log('Attach video');//todo
  }

  timePassFromMessageToNow(date) {
    let difference = new Date(Date.now() - date);
    console.log('time pass',
      difference.getFullYear(), 'years',//this fail a bit much
      difference.getMonth(), 'months',
      difference.getDay(), 'days',//this fail a bit much
      difference.getHours(), 'hours',
      difference.getMinutes(), 'minutes',
      difference.getSeconds(), 'seconds',
      );
  }

}
