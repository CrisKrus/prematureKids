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

  constructor(public navCtrl: NavController, private userProvider: UserProvider, private exercisesProvider: ExercisesProvider) {
    userProvider.getUser(userProvider.uid).then((user) => {
      this.user = user;
      this.setUserType();
      this.setDataToShow();
    });
  }

  private setUserType() {
    this.isDoctor = (this.user.type == 'doctor');
  }

  private setDataToShow() {
    if (this.isDoctor){
      this.patients = this.formatPatients(this.user['patients']);
    }else{
      this.exercises = this.setExercises(this.user['exercises']);
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

  private setExercises(exercises) {
    let result = [];
    for (let exercise in exercises) {
      let item = this.exercisesProvider.getExercise(exercise);
      item.done = this.user['exercises'][exercise]['done'];
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
