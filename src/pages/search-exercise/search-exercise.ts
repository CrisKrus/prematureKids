import {Component} from '@angular/core';
import {ExercisesProvider} from "../../providers/exercises/exercises";
import {NavController} from "ionic-angular";
import {ViewExercisePage} from "../view-exercise/view-exercise";

@Component({
  selector: 'page-search-exercise',
  templateUrl: 'search-exercise.html',
})
export class SearchExercisePage {
  private exercises;
  private exercisesShowingList: string[];

  constructor(private navCtrl: NavController, private exerciseProvider: ExercisesProvider) {
    this.exercises = exerciseProvider.getExercises();
    this.initializeShowingListExercises();
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
}
