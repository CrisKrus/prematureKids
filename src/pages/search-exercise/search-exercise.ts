import {Component} from '@angular/core';
import {ExercisesProvider} from "../../providers/exercises/exercises";

@Component({
  selector: 'page-search-exercise',
  templateUrl: 'search-exercise.html',
})
export class SearchExercisePage {
  private exercises;
  private exercisesShowingList: string[];

  constructor(private exerciseProvider: ExercisesProvider) {
    this.exercises = exerciseProvider.getExercises();
    this.initializeShowingListExercises();
  }

  private initializeShowingListExercises() {
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
    console.log('Exercise selected, ', exercise);
  }
}
