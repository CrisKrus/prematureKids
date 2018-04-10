import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {SearchExercisePage} from "../search-exercise/search-exercise";

@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  private user: any;
  private gender: string;
  private isMyProfile: boolean;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    if (this.isUserOnParams()){
      this.user = this.navParams.get('user');
      this.isMyProfile = false;
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.isMyProfile = true;
    }
    this.gender = this.translateGender();
  }

  private isUserOnParams() {
    return this.navParams.get('user') != null;
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

  seeHistory() {
    console.log('History');
  }

  chat() {
    console.log('Chat');
  }

  addExercise() {
    this.navCtrl.push(SearchExercisePage);
  }
}
