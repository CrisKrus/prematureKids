import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchExercisePage } from './search-exercise';

@NgModule({
  declarations: [
    SearchExercisePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchExercisePage),
  ],
})
export class SearchExercisePageModule {}
