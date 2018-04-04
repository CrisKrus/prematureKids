import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPatientPage } from './search-patient';

@NgModule({
  declarations: [
    SearchPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPatientPage),
  ],
})
export class SearchPatientPageModule {}
