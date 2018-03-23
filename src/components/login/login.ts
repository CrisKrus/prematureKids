import {Component} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  password: string;
  username: string;

  constructor() { }

  logIn() {
    console.log(this.username);
    console.log(this.password);
  }

  signIn() {

  }

}
