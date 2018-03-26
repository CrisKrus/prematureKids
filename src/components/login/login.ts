import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {HomePage} from "../../pages/home/home";
import {UserProvider} from "../../providers/user/user";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  password: string;
  email: string;

  constructor(public navCtrl: NavController, public userProvider: UserProvider) { }

  logIn() {
    let user = this.userProvider.getUser(this.email.toLowerCase());
    if (user){
      window.localStorage.setItem('name', user['name']);
      window.localStorage.setItem('age', user['age']);
      window.localStorage.setItem('email', this.email.toLowerCase());
      this.navCtrl.setRoot(HomePage);
    }
  }

  signIn() {

  }

}
