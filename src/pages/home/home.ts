import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {UserProvider} from "../../providers/user/user";
import {ExercisesProvider} from "../../providers/exercises/exercises";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private user: any | null;
  private isDoctor: boolean;
  private patientsNames: any[];
  private exercises: any[];

  constructor(public navCtrl: NavController, private userProvider: UserProvider, private exercisesProvider: ExercisesProvider) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.controlUserType();
  }

  private controlUserType() {
    if (this.user != null) {
      if (this.user['type'] == 'doctor') {
        this.isDoctor = true;
        this.patientsNames = this.formatPatients(this.user['patients']);
      } else if (this.user['type'] == 'patient') {
        this.isDoctor = false;
        this.exercises = this.setExercises(this.user['exercises']);
        console.log(this.exercises);
      }
    }
  }

  private formatPatients(patients: any) {
    let result = [];
    for (let patient in patients){
      result.push(this.userProvider.getUser(patient)['name']);
    }
    return result;
  }

  private setExercises(exercises: any) {
    let result = [];
    for (let exercise in exercises) {
      result.push(this.exercisesProvider.getExercise(exercise)['title']);
    }
    return result;
  }
}
