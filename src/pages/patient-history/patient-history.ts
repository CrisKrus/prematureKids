import {Component} from '@angular/core';
import {NavParams} from "ionic-angular";
import {ExercisesProvider} from "../../providers/exercises/exercises";

@Component({
  selector: 'page-patient-history',
  templateUrl: 'patient-history.html',
})
export class PatientHistoryPage {
  private exercises = [];

  constructor(public navParams: NavParams, public exerciseProvider: ExercisesProvider) {
  }

  ionViewWillEnter() {
    let assignedExercises = this.navParams.get('user').exercises;
    for (let exerciseID in assignedExercises) {
      this.exerciseProvider.getExercise(exerciseID)
        .then((exercise) => {
          exercise['done'] = assignedExercises[exerciseID].done;
          this.exercises.push(exercise);
        });
    }
  }
}
