import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";

@Component({
  selector: 'page-view-exercise',
  templateUrl: 'view-exercise.html',
})
export class ViewExercisePage {
  private userSessionType;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,  // navParams are use it on html directly
              protected userProvider: UserProvider) {
    userProvider.userSessionType.then((type) => {
      this.userSessionType = type;
    });
  }

  isPatient(){
    return this.userSessionType == 'patient';
  }

  exerciseDone() {
    this.userProvider.markExerciseDone(this.navParams.get('id'), this.userProvider.uid, new Date())
      .then(() => {
        this.navCtrl.pop();
      });
  }
}