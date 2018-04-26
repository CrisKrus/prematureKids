import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SearchExercisePage} from "../search-exercise/search-exercise";
import {AuthProvider} from "../../providers/auth/auth";
import * as firebase from "firebase";

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

    this.user = this.navParams.get('user') || this.auth.session;
  }

  ionViewWillEnter(){
    //TODO should only charge the data the first time, not all the time that the user enter (too much petitions)
    this.chargeData();
  }

  //TODO this should be extracted on auth provider
  private chargeData() {
    let ref = firebase.database().ref('users/' + this.auth.uid);
    ref.on('value', (snapshot) => {
      this.user = snapshot.val();
      this.gender = this.translateGender();
    }, function (error) {
      console.log('Charge data error, ', error.code);
    });
  }

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
    this.navCtrl.push(SearchExercisePage, {assignedExercises : this.user.assignedExercises});
  }
}
