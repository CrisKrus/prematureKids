import {Component} from '@angular/core';
import {NavController, ToastController} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SigningUpPage} from "../../pages/signingUp/signingUp";

import {UserProvider} from "../../providers/user/user";
import {ViewProfilePage} from "../../pages/view-profile/view-profile";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  password: string;
  email: string;
  loginForm: FormGroup;

  constructor(public navCtrl: NavController, private userProvider: UserProvider, private formBuilder: FormBuilder, private toastCtrl: ToastController) {
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
    let user = this.userProvider.getUser(this.email.toLowerCase());
    if (user != undefined){
      this.navCtrl.setRoot(ViewProfilePage, user);
    }else {
      this.showWarning("Correo o contraseña incorrectos");
    }
  }

  private showWarning(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  signin() {
    this.navCtrl.push(SigningUpPage);
  }
}
