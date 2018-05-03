import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ViewProfilePage} from "../view-profile/view-profile";
import {UserProvider} from "../../providers/user/user";

@Component({
  selector: 'page-search-patient',
  templateUrl: 'search-patient.html',
})
export class SearchPatientPage {
  users;
  searchResult: string[];

  constructor(public navCtrl: NavController, public auth: UserProvider) {
    auth.users.then(value => {
      this.users = value;
      this.initializePatientList();
    });
  }

  //TODO all the referent with the list should be extracted to a class 'patient list'
  private initializePatientList() {
    this.searchResult = [];
    for (let key in this.users) {
      if (this.isPatient(this.users[key])) {
        //TODO will need uid then? Should be on a copy on each user
        this.searchResult.push(this.users[key])
      }
    }
  }

  //TODO if only get patients this is not need it
  private isPatient(user){
    return user.type == 'patient';
  }

  search(event){
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

  private updatePatientList(nameToSearch: string){
    for (let key in this.users){
      if (this.isPatient(this.users[key])
        &&this.nameToSearchIsInUsername(this.users[key], nameToSearch)) {
        this.searchResult.push(this.users[key]);
      }
    }
  }

  userSelected(user: any) {
    this.navCtrl.push(ViewProfilePage, {user: user});
  }

  private nameToSearchIsInUsername(user: any, nameToSearch: string) {
    return user['name'].toLowerCase().includes(nameToSearch.toLowerCase());
  }

}
