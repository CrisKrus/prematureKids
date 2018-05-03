import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SearchExercisePage} from "../search-exercise/search-exercise";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  private user: any;
  gender: string;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private auth: AuthProvider) {

    if (this.navParams.get('user')) {
      this.user = this.navParams.get('user');
      this.gender = this.translateGender();
    } else {
      //TODO should only charge the data the first time
      // not all the time that the user enter (too much petitions)
      this.setLoggedUser(auth);
    }
  }

  private setLoggedUser(auth: AuthProvider) {
    auth.getUser(auth.uid).then((user) => {
      this.user = user;
      this.gender = this.translateGender();
    });
  }

  //TODO the elements that should appear with that condition do not, like when is not the logged profile
  isMyProfile() {
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
  }

  seeHistory() {
    console.log('History');
  }

  chat() {
    console.log('Chat');
  }

  addExercise() {
    this.navCtrl.push(SearchExercisePage, {assignedExercises: this.user.assignedExercises});
  }
}
