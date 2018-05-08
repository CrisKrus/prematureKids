import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-view-chat',
  templateUrl: 'view-chat.html',
})
export class ViewChatPage {
  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
