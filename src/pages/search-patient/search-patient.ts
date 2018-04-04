import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";

@IonicPage()
@Component({
  selector: 'page-search-patient',
  templateUrl: 'search-patient.html',
})
export class SearchPatientPage {
  private users;

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {
    this.users = userProvider.getUsers();
  }

  search(event){
    this.users = this.userProvider.getUsers();

    let val = event.target.value;

    if (val && val.trim() != ''){
      for (let key in this.users) {
        if(searchValueIsInTheUsername(this.users[key])){
          return this.users[key];
        }
      }
    }

    function searchValueIsInTheUsername(user: any) {
        return user['name'].toLowerCase().includes(val.toLowerCase());
    }
  }
}
