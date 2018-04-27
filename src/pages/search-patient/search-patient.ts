import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {ViewProfilePage} from "../view-profile/view-profile";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'page-search-patient',
  templateUrl: 'search-patient.html',
})
export class SearchPatientPage {
  private users;
  private searchResult: string[];
  private users_live;
  private searchResult_live: string[];

  constructor(public navCtrl: NavController, public userProvider: UserProvider, public auth: AuthProvider) {
    this.users = userProvider.getUsers();
    auth.users.then(value => {
      this.users_live = value;
      this.initializePatientList();
    });
    this.initializePatientList();
  }

  //TODO all the referent with the list should be extracted to a class 'patient list'
  private initializePatientList() {
    this.searchResult_live = [];
    for (let key in this.users_live) {
      if (this.isPatient_live(this.users_live[key])) {
        //TODO will need uid then? Should be on a copy on each user
        this.searchResult_live.push(this.users_live[key])
      }
    }

    this.searchResult = [];
    for (let key in this.users) {
      if(this.isPatient(key)){
        this.searchResult.push((this.users[key]));
      }
    }
  }

  private isPatient_live(user){
    return user.type == 'patient';
  }

  private isPatient(key) {
    return this.users[key]['type'] == 'patient';
  }

  search(event){
    this.searchResult_live = [];
    this.searchResult = [];

    let nameToSearch = event.target.value;

    if (this.searchBarIsNotEmpty(nameToSearch)){
      this.updatePatientList(nameToSearch);
    }else {
      this.initializePatientList();
    }
  }

  private searchBarIsNotEmpty(nameToSearch: any) {
    return nameToSearch && nameToSearch.trim() != '';
  }

  private updatePatientList(nameToSearch: string) {
    for (let key in this.users) {
      if (this.isPatient(key) && this.searchStringOnUsername(this.users[key], nameToSearch)) {
        this.searchResult.push(this.users[key]);
      }
    }
  }

  userSelected(user: any) {
    this.navCtrl.push(ViewProfilePage, {user: user});
  }

  private searchStringOnUsername(user: any, nameToSearch: string) {
    return user['name'].toLowerCase().includes(nameToSearch.toLowerCase());
  }

}
