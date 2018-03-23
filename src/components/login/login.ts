import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {HomePage} from "../../pages/home/home";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  password: string;
  email: string;

  constructor(public navCtrl: NavController) { }

  logIn() {
    window.localStorage.setItem('name', 'Cristian');
    window.localStorage.setItem('age', "22");
    window.localStorage.setItem('email', this.email);
    this.navCtrl.setRoot(HomePage);
  }

  signIn() {

  }

}
