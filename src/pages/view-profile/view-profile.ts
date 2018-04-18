import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {SearchExercisePage} from "../search-exercise/search-exercise";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  private user: any;
  protected gender: string;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private auth: AuthProvider) {

    this.user = this.navParams.get('user') || this.auth.Session;
    this.gender = this.translateGender();
  }

  private isMyProfile() {
    return this.navParams.get('user') == null;
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
    this.auth.logout();
    this.navCtrl.setRoot(HomePage);
  }

  seeHistory() {
    console.log('History');
  }

  chat() {
    console.log('Chat');
  }

  addExercise() {
    this.navCtrl.push(SearchExercisePage, {assignedExercises : this.user.assignedExercises});
  }
}
