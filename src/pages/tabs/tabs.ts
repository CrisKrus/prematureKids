import {Component} from '@angular/core';
import {HomePage} from "../home/home";
import {ViewProfilePage} from "../view-profile/view-profile";
import {SearchPatientPage} from "../search-patient/search-patient";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  home = HomePage;
  profile = ViewProfilePage;
  search = SearchPatientPage;

  userType;

  constructor(private auth: AuthProvider) {
    this.auth.userType.then((responseUserType) => {
      this.userType = responseUserType;
    });
  }

}
