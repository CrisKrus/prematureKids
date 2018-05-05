import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";

@Component({
  selector: 'page-view-exercise',
  templateUrl: 'view-exercise.html',
})
export class ViewExercisePage {
  private userSessionType;
  private exercise;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,  // navParams are use it on html directly
              protected userProvider: UserProvider) {
    userProvider.userSessionType.then((type) => {
      this.userSessionType = type;
    });
    this.exercise = navParams.get('exercise');
  }

  isPatient(){
    return this.userSessionType == 'patient';
  }

  isDoctor(){
    return this.userSessionType == 'doctor';
  }

  exerciseDone() {
    this.userProvider.markExerciseDone(this.exercise.id, this.userProvider.uid, new Date())
      .then(() => {
        this.navCtrl.pop();
      });
  }

  assignExerciseWithObservations(){
    this.userProvider.assignExercise(this.exercise.id, this.navParams.get('userId'), "blabblabla");
  }
}