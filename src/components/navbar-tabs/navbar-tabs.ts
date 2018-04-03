import { Component } from '@angular/core';
import {HomePage} from "../../pages/home/home";
import {ViewProfilePage} from "../../pages/view-profile/view-profile";

@Component({
  selector: 'navbar-tabs',
  templateUrl: 'navbar-tabs.html'
})
export class NavbarTabsComponent {
  home = HomePage;
  profile = ViewProfilePage;
  user: any;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
