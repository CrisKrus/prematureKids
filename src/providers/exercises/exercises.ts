import {Injectable} from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class ExercisesProvider {

  getExercise(exerciseUid: string) {
    return new Promise(resolve => {
      firebase.database().ref('exercises/' + exerciseUid)
        .on('value', (snapshot) => {
          resolve(snapshot.val());
        }, (error) => {
          error(error.code);
        });
    });
  }

  get exercises(){
    return new Promise(resolve => {
      firebase.database().ref('exercises/')
        .on('value', (snapshot) => {
          resolve(snapshot.val());
        }, (error) => {
          error(error.code);
        });
    });
  }
}
