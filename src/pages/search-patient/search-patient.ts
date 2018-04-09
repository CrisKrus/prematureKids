import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {ViewProfilePage} from "../view-profile/view-profile";

@Component({
  selector: 'page-search-patient',
  templateUrl: 'search-patient.html',
})
export class SearchPatientPage {
  private users;
  private searchResult: string[];

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {
    this.users = userProvider.getUsers();
    this.initializePatientList();
  }

  private initializePatientList() {
    this.searchResult = [];
    for (let key in this.users) {
      if(this.isPatient(key)){
        this.searchResult.push((this.users[key]));
      }
    }
  }

  private isPatient(key) {
    return this.users[key]['type'] == 'patient';
  }

  search(event){
    this.searchResult = [];

    let nameToSearch = event.target.value;

    if (nameToSearch && nameToSearch.trim() != ''){
      this.updatePatientList(nameToSearch);
    }else {
      this.initializePatientList();
    }
  }

  private updatePatientList(nameToSearch: string) {
    for (let key in this.users) {
      if (this.isPatient(key) && this.searchValueIsInTheUsername(this.users[key], nameToSearch)) {
        this.searchResult.push(this.users[key]);
      }
    }
  }

  userSelected(user: any) {
    this.navCtrl.push(ViewProfilePage, {user: user});
  }

  //TODO this is not well named
  private searchValueIsInTheUsername(user: any, nameToSearch: string) {
    return user['name'].toLowerCase().includes(nameToSearch.toLowerCase());
  }
}
