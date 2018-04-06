import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {ViewProfilePage} from "../view-profile/view-profile";

@IonicPage()
@Component({
  selector: 'page-search-patient',
  templateUrl: 'search-patient.html',
})
export class SearchPatientPage {
  private users;
  private searchResult: string[];

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {
    this.users = userProvider.getUsers();
    this.initializeUsers();
  }

  private initializeUsers() {
    this.searchResult = [];
    for (let key in this.users) {
      this.searchResult.push((this.users[key]));
    }
  }

  search(event){
    this.searchResult = [];

    let val = event.target.value;

    if (val && val.trim() != ''){
      for (let key in this.users) {
        if(searchValueIsInTheUsername(this.users[key])){
          this.searchResult.push(this.users[key]);
        }
      }
    }else {
      this.initializeUsers();
    }

    function searchValueIsInTheUsername(user: any) {
        return user['name'].toLowerCase().includes(val.toLowerCase());
    }
  }

  userSelected(user: any) {
    this.navCtrl.push(ViewProfilePage, {user: user});
  }
}
