import {Component} from '@angular/core';
import {ExercisesProvider} from "../../providers/exercises/exercises";

@Component({
  selector: 'page-search-exercise',
  templateUrl: 'search-exercise.html',
})
export class SearchExercisePage {
  private exercises;
  private exercisesResult: string[];

  constructor(private exerciseProvider: ExercisesProvider) {
    this.exercises = exerciseProvider.getExercises();
    this.initializeExercises();
  }

  private initializeExercises() {
    this.exercisesResult = [];
    for (let key in this.exercises) {
      this.exercisesResult.push(this.exercises[key]);
    }
  }

  search(event){
    console.log('Search, ', event);
  }

  exerciseSelected(exercise: any){
    console.log('Exercise selected, ', exercise);
  }
}
