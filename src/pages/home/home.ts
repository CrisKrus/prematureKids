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
  protected exercisesNotDone = [];
  protected exerciseDone = [];

  constructor(public navCtrl: NavController,
              private userProvider: UserProvider,
              private exercisesProvider: ExercisesProvider) {
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
    if (this.isDoctor) {
      this.setPatients(this.user['patients']);
    } else {
      this.setExercises(this.user['exercises']);
    }
  }

  private setPatients(patientsUid) {
    for (let uid in patientsUid) {
      this.userProvider.getUser(uid).then((user) => {
        //TODO this is bullshit
        user['id'] = uid;
        this.patients.push(user);
      });
    }
  }

  //TODO refactor this big thing...
  private setExercises(patientAssignedExercises) {
    for (let exerciseID in patientAssignedExercises) {
      this.exercisesProvider.getExercise(exerciseID).then((exercise) => {
        //TODO this is bullshit
        let assignedExercise = patientAssignedExercises[exerciseID];
        exercise['id'] = exerciseID;
        exercise['observations'] = assignedExercise.observations || "";
        if (this.userProvider.exerciseIsDone(assignedExercise)) {
          this.exerciseDone.push(exercise);
        } else {
          this.exercisesNotDone.push(exercise);
        }
      });
    }
  }

  exerciseSelected(exercise: any) {
    console.log('Selected', exercise);//todo
    this.navCtrl.push(ViewExercisePage, {"exercise": exercise});
  }

  patientSelected(patient: any) {
    this.navCtrl.push(ViewProfilePage, {user: patient})
  }
}
