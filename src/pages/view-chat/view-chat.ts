import {Component, ViewChild} from '@angular/core';
import {Content, NavParams} from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";
import {UserProvider} from "../../providers/user/user";

@Component({
    selector: 'page-view-chat',
    templateUrl: 'view-chat.html',
})
export class ViewChatPage {

    @ViewChild(Content) content: Content;
    textAreaMessage: string;
    private chatId;
    private messages = [];
    private username: string;

    constructor(public navParams: NavParams, protected chatProvider: ChatProvider, private userProvider: UserProvider) {
        this.chatId = navParams.get('chatId');
        this.username = navParams.get('username');
    }

    ionViewDidEnter() {
        this.messages = [];
        //TODO stop this because if a new message is added and the user is on other view the app crash
        this.chatProvider.onMessageAdded(this.chatId,
            (childAdded) => {
                this.addMessageToView(childAdded.val(), childAdded.key);
            },
            (error) => {
                //TODO handle error
                console.error('Error on child added', error.key);
            });
        this.scrollToBottom();
    }

    ionVewWillLeave() {
        //TODO this do nothing
        this.chatProvider.unsubscribeFromNewMessages(this.chatId);
    }

    private addMessageToView(message, timestamp) {
        let item = {
            date: new Date(parseInt(timestamp)),
            text: message.text,
            userName: message.userName,
            isSystem: this.isSystem(message),
            isSender: this.isSender(message)
        };
        this.messages.push(item);
        this.scrollToBottom()
    }

    private isSender(message) {
        if (message.userName == 'System') return false;
        return message.uid == this.userProvider.uid;
    }

    private isSystem(message) {
        return message.userName == 'System';
    }

    sendMessage(textArea) {
        if (this.inNotEmpty(textArea)) {
            this.chatProvider.sendMessage(this.chatId, textArea, this.userProvider.uid);
            this.textAreaMessage = '';
        }
    }

    private inNotEmpty(textArea) {
        return textArea && textArea.trim() != '';
    }

    onFocus() {
        console.log('On focus');//todo
    }

    private scrollToBottom() {
        setTimeout(() => {
            if (this.content.scrollToBottom) {
                this.content.scrollToBottom();
            }
        }, 400)
    }
}
