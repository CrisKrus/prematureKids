import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  private user: any;
  private gender: string;

  //  TODO if the profile is the same as the logged saw it if not don't show it (if you are patient)
  constructor(public navCtrl: NavController) {
    //TODO navCtrl can be use to control navigation bar??
    this.user = JSON.parse(localStorage.getItem('user'));
    this.gender = this.translateGender();
  }

  //TODO this is not the best way to do it I think
  private translateGender() {
    return this.user['gender'] == "male" && "Hombre"
      || this.user['gender'] == "female" && "Mujer"
      || "No especificado";
  }

  editProfile() {
    console.log('Edit-profile');
  }
}
