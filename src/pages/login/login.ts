import {Component} from '@angular/core';
import {NavController, ToastController} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SigningUpPage} from "../signing-up/signing-up";
import {UserProvider} from "../../providers/user/user";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  password: string;
  email: string;
  loginForm: FormGroup;

  constructor(public navCtrl: NavController,
              private formBuilder: FormBuilder,
              private toastCtrl: ToastController,
              private userProvider: UserProvider) {
    this.addInputValidators();
  }

  private addInputValidators() {
    this.loginForm = this.formBuilder.group({
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

  login() {
    this.userProvider.login(this.email, this.password)
      .then(() => this.email = this.password = '')
      .catch((error) => this.showWarning(error));
  }

  private showWarning(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 10000,
      position: 'top'
    });
    toast.present();
  }

  openSigninPage() {
    this.navCtrl.push(SigningUpPage);
  }
}
