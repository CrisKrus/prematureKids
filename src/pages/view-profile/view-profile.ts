import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  private user: any;
  private gender: string;

  constructor(public navCtrl: NavController) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.gender = this.translateGender();
  }

  //TODO this is not the best way to do it, I think
  private translateGender() {
    return this.user['gender'] == "male" && "Hombre"
      || this.user['gender'] == "female" && "Mujer"
      || "No especificado";
  }

  editProfile() {
    console.log('Edit-profile');
  }

  logout() {
    window.localStorage.removeItem('user');
    this.navCtrl.setRoot(HomePage);
  }
}
