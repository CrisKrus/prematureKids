import {Injectable} from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class ChatProvider {
  constructor() {
  }

  createChat(doctorId, patientId) {
    firebase.database().ref('chat-messages/').push().then((chat) => {
      let firstMessage = {};
      firstMessage[Date.now()] = 'El chat ha sido creado';
      firebase.database().ref('chat-messages/' + chat.key).set(firstMessage).then(() => {
        //TODO have to wait one for another?
        this.addChatReference(doctorId, patientId, chat.key);
        this.addChatReference(patientId, doctorId, chat.key);
      });
    });
  }

  private addChatReference(userIdOwner, userId, chatId) {
    let reference = {};
    reference[userId] = chatId;
    return firebase.database().ref('chats/' + userIdOwner).update(reference);
  }
}
