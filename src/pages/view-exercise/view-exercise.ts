import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-view-exercise',
  templateUrl: 'view-exercise.html',
})
export class ViewExercisePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  exerciseDone() {
    console.log("Exercise done at: ", new Date());
    this.navCtrl.pop();
  }
}