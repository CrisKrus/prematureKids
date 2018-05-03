import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {ExercisesProvider} from "../../providers/exercises/exercises";
import {ViewExercisePage} from "../view-exercise/view-exercise";
import {ViewProfilePage} from "../view-profile/view-profile";
import {UserProvider} from "../../providers/user/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private user: any | null;
  protected isDoctor: boolean;
  protected patients: any[];
  protected exercises: any[];

  constructor(public navCtrl: NavController,
              private userProvider: UserProvider,
              private exercisesProvider: ExercisesProvider) {
    userProvider.getUser(userProvider.uid).then((user) => {
      this.user = user;
      this.controlUserType();
    });
  }

  private controlUserType() {
    if (this.user != null) {
      if (this.user['type'] == 'doctor') {
        this.isDoctor = true;
        this.patients = this.formatPatients(this.user['patients']);
      } else if (this.user['type'] == 'patient') {
        this.isDoctor = false;
        this.exercises = this.setExercises(this.user['assignedExercises']);
      }
    }
  }

  private formatPatients(patientsUid: any) {
    let result = [];
    for (let patient in patientsUid){
      this.userProvider.getUser(patient).then((user) => {
        result.push(user);
      });
    }
    return result;
  }

  private setExercises(assignedExercises: any) {
    let result = [];
    for (let exercise in assignedExercises) {
      let item = this.exercisesProvider.getExercise(exercise);
      item.done = this.user['assignedExercises'][exercise]['done'];
      result.push(item);
    }
    return result;
  }

  exerciseSelected(exercise: any) {
    this.navCtrl.push(ViewExercisePage, exercise);
  }

  patientSelected(patient: any) {
    this.navCtrl.push(ViewProfilePage, {user: patient})
  }
}
