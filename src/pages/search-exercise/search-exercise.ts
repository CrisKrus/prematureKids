import {Component} from '@angular/core';
import {ExercisesProvider} from "../../providers/exercises/exercises";
import {NavController, NavParams, ToastController} from "ionic-angular";
import {ViewExercisePage} from "../view-exercise/view-exercise";

@Component({
  selector: 'page-search-exercise',
  templateUrl: 'search-exercise.html',
})
export class SearchExercisePage {
  private allExercises;
  private exercisesToShow: string[];
  private userAssignedExercises: string[];

  constructor(private navCtrl: NavController,
              protected navParams: NavParams,
              protected exerciseProvider: ExercisesProvider,
              private toastCtrl: ToastController) {
    exerciseProvider.exercises.then((exercises) => {
      this.allExercises = exercises;
      this.initializeExercisesToShow();
      this.userAssignedExercises = navParams.get('assignedExercises');
    });
  }

  private initializeExercisesToShow() {
    this.exercisesToShow = [];
    for (let key in this.allExercises) {
      this.addExerciseToShow(key);
    }
  }

  private addExerciseToShow(key) {
    let exercise = this.allExercises[key];
    exercise.id = key;
    this.exercisesToShow.push(exercise);
  }

  search(event) {
    this.exercisesToShow = [];
    let exerciseToSearch = event.target.value;

    if (this.existsAnExerciseAndIsNotEmpty(exerciseToSearch)) {
      this.updateExerciseList(exerciseToSearch);
    } else {
      this.initializeExercisesToShow();
    }
  }

  private existsAnExerciseAndIsNotEmpty(exerciseToSearch: any) {
    return exerciseToSearch && exerciseToSearch.trim() != '';
  }

  private updateExerciseList(exerciseToSearch: string) {
    for (let key in this.allExercises) {
      if (this.searchStringOnTitle(this.allExercises[key], exerciseToSearch)) {
        this.addExerciseToShow(key);
      }
    }
  }

  private searchStringOnTitle(exercise: any, exerciseToSearch: string) {
    return exercise['title'].toLowerCase().includes(exerciseToSearch.toLowerCase());
  }

  exerciseSelected(exercise: any) {
    //TODO control if is doctor who view exercise or patient
    //TODO when doctor assign exercise can add observations
    //TODO observations have to be on patient history not on exercise data, bc each observations is different fon each patient
    this.navCtrl.push(ViewExercisePage, exercise);
  }

  isExerciseAssigned(exercise) {
    return this.userAssignedExercises[exercise.id] != undefined;
  }

  checkboxChange(event: any, exerciseTitle: string) {
    if (event.checked) {
      this.showToast("Ejercicio " + exerciseTitle + " asignado")
    } else {
      this.showToast("Ejercicio " + exerciseTitle + " desasignado")
    }
  }

  //TODO extract toasts to class
  private showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
