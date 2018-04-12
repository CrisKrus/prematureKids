import {Component} from '@angular/core';
import {ExercisesProvider} from "../../providers/exercises/exercises";
import {NavController, NavParams, ToastController} from "ionic-angular";
import {ViewExercisePage} from "../view-exercise/view-exercise";

@Component({
  selector: 'page-search-exercise',
  templateUrl: 'search-exercise.html',
})
export class SearchExercisePage {
  private exercises;
  private exercisesShowingList: string[];
  private userAssignedExercises: string[];

  constructor(private navCtrl: NavController,
              protected navParams: NavParams,
              protected exerciseProvider: ExercisesProvider,
              private toastCtrl: ToastController) {
    this.exercises = exerciseProvider.getExercises();
    this.initializeShowingListExercises();
    this.userAssignedExercises = navParams.get('assignedExercises');
  }

  private initializeShowingListExercises() {
    //TODO add checkbox mark if exercise is assign to this patient
    this.exercisesShowingList = [];
    for (let key in this.exercises) {
      this.exercisesShowingList.push(this.exercises[key]);
    }
  }

  search(event){
    this.exercisesShowingList = [];

    let exerciseToSearch = event.target.value;
    
    if (exerciseToSearch && exerciseToSearch.trim() != ''){
      this.updateExerciseList(exerciseToSearch);
    } else {
      this.initializeShowingListExercises();
    }
  }

  private updateExerciseList(exerciseToSearch: string) {
    for (let key in this.exercises) {
      if(this.searchStringOnTitle(this.exercises[key], exerciseToSearch)){
        this.exercisesShowingList.push(this.exercises[key]);
      }
    }
  }

  private searchStringOnTitle(exercise: any, exerciseToSearch: string) {
    return exercise['title'].toLowerCase().includes(exerciseToSearch.toLowerCase());
  }

  exerciseSelected(exercise: any){
    //TODO control if is doctor who view exercise or patient
    //TODO when doctor assign exercise can add observations
    //TODO observations have to be on patient history not on exercise data, bc each observations is different fon each patient
    this.navCtrl.push(ViewExercisePage, exercise);
  }

  isExerciseAssigned(exerciseID: string) {
    return this.userAssignedExercises[exerciseID] != undefined;
  }

  checkboxChange(event: any, exerciseTitle: string) {
    if (event.checked){
      this.showToast("Ejercicio " + exerciseTitle + " asignado")
    }else {
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
