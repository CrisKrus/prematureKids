import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {HomePage} from "../../pages/home/home";
import {UserProvider} from "../../providers/user/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  password: string;
  email: string;
  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public userProvider: UserProvider, public formBuilder: FormBuilder) {
    this.addInputValidators(formBuilder);
  }

  logIn() {
    let user = this.userProvider.getUser(this.email.toLowerCase());
    if (user != 'undefined'){
      window.localStorage.setItem('name', user['name']);
      window.localStorage.setItem('age', user['age']);
      window.localStorage.setItem('email', user['email']);
      this.navCtrl.setRoot(HomePage);
    }
  }

  signIn() {

  }

  private addInputValidators(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])]
    });
  }
}
