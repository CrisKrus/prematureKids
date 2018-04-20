import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {SearchExercisePage} from "../search-exercise/search-exercise";
import {AuthProvider} from "../../providers/auth/auth";
import * as firebase from "firebase";

@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  private user: any;
  private gender: string;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private auth: AuthProvider) {

    this.user = this.navParams.get('user') || this.auth.Session;
    this.gender = this.translateGender();
  }

  private ionViewWillEnter(){
    this.chargeData();
  }

  //TODO store data on local variable to show it
  private chargeData() {
    let ref = firebase.database().ref('users/' + this.auth.uid);
    ref.on('value', function (snapshot) {
      console.log(snapshot.val());
    }, function (error) {
      console.log('Charge data error, ', error.code);
    });
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
