import {Injectable} from '@angular/core';
import * as firebase from "firebase";
import {UserProvider} from "../user/user";

@Injectable()
export class ChatProvider {
  private chatMessages;
  private chats;

  constructor(private userProvider: UserProvider) {
    this.chatMessages = firebase.database().ref('chat-messages');
    this.chats = firebase.database().ref('chats');
  }

  createChat(doctorId, patientId) {
    this.chatMessages.push().then((chat) => {
      let firstMessage = {};
      firstMessage[Date.now()] = {text: 'El chat ha sido creado', userName: 'System'};
      this.chatMessages.child(chat.key).set(firstMessage).then(() => {
        //TODO have to wait one for another?
        this.addChatReference(doctorId, patientId, chat.key);
        this.addChatReference(patientId, doctorId, chat.key);
      });
    });
  }

  private addChatReference(userIdOwner, userId, chatId) {
    let reference = {};
    reference[userId] = chatId;
    return this.chats.child(userIdOwner).update(reference);
  }

  haveAChat(userId, userId2) {
    return new Promise(resolve => {
      this.chats.child(userId)
        .on('value', (chatList) => {
          if (this.isNotDefined(chatList)) {
            resolve(false);
          } else {
            resolve(this.isUserInChatList(chatList, userId2));
          }
        });
    });
  }

  private isNotDefined(snapshot) {
    return snapshot.val() == null;
  }

  private isUserInChatList(snapshot, userId2) {
    return snapshot.val()[userId2] != undefined;
  }

  getChatsFromUser(userId: string) {
    return new Promise(resolve => {
      this.chats.child(userId)
        .on('value', (snapshot) => {
          resolve(snapshot.val() || {});
        });
    });
  }

  sendMessage(chatId, message: string, userId) {
    this.userProvider.getUser(userId).then((user) => {
      let item = {};
      item[Date.now()] = {
        text: message,
        userName: user['name'],
        uid: userId
      };
      this.chatMessages.child(chatId).update(item);
    });
  }

  onMessageAdded(chatId, callback, errorFunction) {
    return this.chatMessages.child(chatId).on('child_added',
      (messageAdded) => {
        callback(messageAdded);
      },
      (error) => {
        errorFunction(error)
      }
    );
  }

  unsubscribeFromNewMessages(chatId) {
    this.chatMessages.child(chatId).off('child_added', () => {console.log('cancel');});
  }
}
