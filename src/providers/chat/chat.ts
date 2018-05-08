import {Injectable} from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class ChatProvider {
  constructor() {
  }

  createChat(doctorName: string, patientName: string) {
    firebase.database().ref('chats/').push().then((chat) => {
      firebase.database().ref('chats/' + chat.key).set({doctor: doctorName, patient: patientName})
        .then(()=>{
          console.log('chat created', chat.key);
        //todo add chat id to patient chat list and doctor chat list
        });
    });
  }
}
