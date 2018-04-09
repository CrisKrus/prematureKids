import { Component } from '@angular/core';
import {HomePage} from "../../pages/home/home";
import {ViewProfilePage} from "../../pages/view-profile/view-profile";
import {NavController} from "ionic-angular";
import {LoginPage} from "../../pages/login/login";
import {SearchPatientPage} from "../../pages/search-patient/search-patient";

@Component({
  selector: 'navbar-tabs',
  templateUrl: 'navbar-tabs.html'
})
export class NavbarTabsComponent {
  home = HomePage;
  profile = ViewProfilePage;
  search = SearchPatientPage;
  user: any;

  constructor(public navCtrl: NavController) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user == null) navCtrl.setRoot(LoginPage);
  }
}
