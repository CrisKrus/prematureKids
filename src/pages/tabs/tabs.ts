import {Component} from '@angular/core';
import {HomePage} from "../home/home";
import {ViewProfilePage} from "../view-profile/view-profile";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {SearchPatientPage} from "../search-patient/search-patient";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  home = HomePage;
  profile = ViewProfilePage;
  search = SearchPatientPage;
  user: any;

  constructor(public navCtrl: NavController) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user == null) navCtrl.setRoot(LoginPage);
  }
}
