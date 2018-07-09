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
    protected patients = [];
    protected exercisesNotDone = [];
    protected exerciseDone = [];

    constructor(public navCtrl: NavController,
                private userProvider: UserProvider,
                private exercisesProvider: ExercisesProvider) {
    }

    ionViewWillEnter() {
        this.userProvider.getUser(this.userProvider.uid).then((user) => {
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
        this.patients = [];
        for (let uid in patientsUid) {
            this.userProvider.getUser(uid).then((user) => {
                //TODO this is bullshit
                user['id'] = uid;
                user['news'] = false;
                for (let exerciseID in user['exercises']) {
                    if (this.userProvider.isExerciseDone(user['exercises'][exerciseID])) {
                        if (this.wasExerciseView(user['exercises'][exerciseID], uid)) {
                            user['news'] = true;
                            break;
                        }
                    }
                }
                this.patients.push(user);
            });
        }
    }

    private wasExerciseView(exercise, uid) {
        return exercise['done'] > this.user['patients'][uid];
    }

    //TODO refactor this big thing...
    private setExercises(patientAssignedExercises) {
        this.exerciseDone = [];
        this.exercisesNotDone = [];
        for (let exerciseID in patientAssignedExercises) {
            this.exercisesProvider.getExercise(exerciseID).then((exercise) => {
                //TODO this is bullshit
                let assignedExercise = patientAssignedExercises[exerciseID];
                exercise['id'] = exerciseID;
                exercise['observations'] = assignedExercise.observations || "";
                if (this.userProvider.isExerciseDone(assignedExercise)) {
                    this.exerciseDone.push(exercise);
                } else {
                    this.exercisesNotDone.push(exercise);
                }
            });
        }
    }

    exerciseSelected(exercise: any) {
        this.navCtrl.push(ViewExercisePage, {"exercise": exercise});
    }

    patientSelected(patient) {
        this.navCtrl.push(ViewProfilePage, {user: patient})
    }
}