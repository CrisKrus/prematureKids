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
      this.patients = this.setPatients(this.user['patients']);
    }else{
      this.exercises = this.setExercises(this.user['exercises']);
    }
  }

  private setPatients(patientsUid) {
    let result = [];
    for (let uid in patientsUid){
      this.userProvider.getUser(uid).then((user) => {
        //TODO this is bullshit
        user['id'] = uid;
        result.push(user);
      });
    }
    return result;
  }

  //TODO refactor this big thing...
  private setExercises(patientAssignedExercises) {
    let result = [];
    for (let exerciseID in patientAssignedExercises) {
      this.exercisesProvider.getExercise(exerciseID).then((exercise) => {
        //TODO this is bullshit
        exercise['id'] = exerciseID;
        this.setNumberOfTimesDone(exerciseID, exercise);
        exercise['observations'] = patientAssignedExercises[exerciseID].observations || "";
        result.push(exercise);
      });
    }
    return result;
  }

  private setNumberOfTimesDone(exerciseID, exercise) {
    this.userProvider.timesExerciseWasDone(exerciseID, this.userProvider.uid)
      .then((numberOfTimesDone) => {
        exercise['timesDone'] = numberOfTimesDone;
      }).catch(() => {
      //TODO handle error
      exercise['timesDone'] = 0;
    });
  }

  exerciseSelected(exercise: any) {
    this.navCtrl.push(ViewExercisePage, {"exercise": exercise});
  }

  patientSelected(patient: any) {
    this.navCtrl.push(ViewProfilePage, {user: patient})
  }
}
