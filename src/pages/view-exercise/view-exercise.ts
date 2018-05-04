import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";

@Component({
  selector: 'page-view-exercise',
  templateUrl: 'view-exercise.html',
})
export class ViewExercisePage {
  private userSessionType;

  constructor(public navCtrl: NavController, public navParams: NavParams, protected userProvider: UserProvider) {
    userProvider.userSessionType.then((type) => {
      this.userSessionType = type;
    });
  }

  isPatient(){
    return this.userSessionType == 'patient';
  }

  exerciseDone() {
    console.log("Exercise done at: ", new Date());
    this.navCtrl.pop();
  }
}