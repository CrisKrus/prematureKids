import {Component} from '@angular/core';
import {HomePage} from "../home/home";
import {ViewProfilePage} from "../view-profile/view-profile";
import {SearchPatientPage} from "../search-patient/search-patient";
import {UserProvider} from "../../providers/user/user";
import {ChatListPage} from "../chat-list/chat-list";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  home = HomePage;
  profile = ViewProfilePage;
  search = SearchPatientPage;
  chat = ChatListPage;

  userType;

  constructor(private userProvider: UserProvider) {
    this.userProvider.userSessionType.then((responseUserType) => {
      this.userType = responseUserType;
    });
  }

}
