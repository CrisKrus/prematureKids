import { Component } from '@angular/core';
import {HomePage} from "../../pages/home/home";
import {ViewProfilePage} from "../../pages/view-profile/view-profile";
import {NavController} from "ionic-angular";
import {LoginComponent} from "../login/login";

@Component({
  selector: 'navbar-tabs',
  templateUrl: 'navbar-tabs.html'
})
export class NavbarTabsComponent {
  home = HomePage;
  profile = ViewProfilePage;
  user: any;

  constructor(public navCtrl: NavController) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user == null) navCtrl.setRoot(LoginComponent);
  }
}
