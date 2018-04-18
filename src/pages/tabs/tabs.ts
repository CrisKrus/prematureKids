import {Component} from '@angular/core';
import {HomePage} from "../home/home";
import {ViewProfilePage} from "../view-profile/view-profile";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {SearchPatientPage} from "../search-patient/search-patient";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  home = HomePage;
  profile = ViewProfilePage;
  search = SearchPatientPage;
  user: any;

  constructor(private auth: AuthProvider) {
    this.user = this.auth.Session;
  }
}
