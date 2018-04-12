import {Component} from '@angular/core';
import {NavController, ToastController} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SigningUpPage} from "../signing-up/signing-up";

import {UserProvider} from "../../providers/user/user";
import {TabsPage} from "../tabs/tabs";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  password: string;
  email: string;
  loginForm: FormGroup;

  constructor(public navCtrl: NavController,
              private userProvider: UserProvider,
              private formBuilder: FormBuilder,
              private toastCtrl: ToastController,
              private auth: AuthProvider) {
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
    this.auth.login(this.email, this.password)
      .then((user) => {
        console.log('User logged ', user);
      })
      .catch(err => {
        this.showWarning('Error, ' + err)
      });

    // let user = this.userProvider.getUser(this.email.toLowerCase());
    // if (user != undefined){
    //   localStorage.setItem('user', JSON.stringify(user));
    //   this.navCtrl.setRoot(TabsPage);
    // }else {
    //   this.showWarning("Correo o contraseña incorrectos");
    // }
  }

  //TODO extract toasts to class
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
