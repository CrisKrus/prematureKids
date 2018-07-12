import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {ChatProvider} from "../../providers/chat/chat";
import {ViewChatPage} from "../view-chat/view-chat";

@Component({
    selector: 'page-chat-list',
    templateUrl: 'chat-list.html',
})
export class ChatListPage {
    private chatList = [];

    constructor(public navCtrl: NavController, private userProvider: UserProvider, protected chatProvider: ChatProvider) {
    }
    ionViewDidLoad() {
        this.chatProvider.getChatsFromUser(this.userProvider.uid)
            .then((chats) => {
                this.initializeChatList(chats);
            });
    }
    private initializeChatList(chatsReferences) {
        for (let userId in chatsReferences) {
            let data = [];
            data['chatId'] = chatsReferences[userId];
            this.userProvider.getUser(userId).then((user) => {
                data['user'] = user['name'];
                this.chatList.push(data);
            });
        }
    }

    chatSelected(chatId, username) {
        this.navCtrl.push(ViewChatPage, {chatId: chatId, username: username});
    }
}
