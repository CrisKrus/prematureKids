import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";

@Component({
  selector: 'page-view-chat',
  templateUrl: 'view-chat.html',
})
export class ViewChatPage {
  message: string;
  private chatId;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chatProvider: ChatProvider) {
    this.chatId = navParams.get('chatId');
    chatProvider.getChatMessages(this.chatId);
  }

  sendMessage() {
    console.log('Send message', this.message);//todo
  }

  onFocus(){
    console.log('On focus');//todo
  }

  attachVideo() {
    console.log('Attach video');//todo
  }
}
