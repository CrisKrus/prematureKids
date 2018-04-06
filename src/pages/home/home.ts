import {Component} from '@angular/core';
import {NavController, UrlSerializer} from "ionic-angular";
import {UserProvider} from "../../providers/user/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private user: any | null;
  private isDoctor: boolean;
  private patientsNames;

  constructor(public navCtrl: NavController, private userProvider: UserProvider) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user != null && this.user['type'] == 'doctor') {
      this.isDoctor = true;
      console.log('Before format patients, ' + this.user['patients']);
      this.patientsNames = this.formatPatients(this.user['patients']);
      console.log('After format patients');
    }
  }

  private formatPatients(patients: any) {
    let result = [];
    console.log(patients);
    for (let patient in patients){
      result.push(this.userProvider.getUser(patient)['name']);
    }
    return result;
  }
}
