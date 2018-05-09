import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";

@Component({
  selector: 'page-view-chat',
  templateUrl: 'view-chat.html',
})
export class ViewChatPage {
  textAreaMessage: string;
  private chatId;
  private messages = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, protected chatProvider: ChatProvider) {
    this.chatId = navParams.get('chatId');
    chatProvider.getChatMessages(this.chatId).then((messages) => {
      this.initializeMessages(messages);
    });
  }

  private initializeMessages(messages) {
    for(let timestamp in messages) {
      let item = {
        date: new Date(parseInt(timestamp)),
        text: messages[timestamp].message,
        userName: messages[timestamp].name
      };
      this.messages.push(item);
    }
  }

  sendMessage(textArea) {
    console.log('Send message', textArea);//todo
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
