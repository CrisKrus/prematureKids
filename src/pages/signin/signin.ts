import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserProvider} from "../../providers/user/user";
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private userProvider: UserProvider) {
    this.addInputValidators();
  }

  addInputValidators() {
    this.user = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(10),
        Validators.maxLength(50)
      ])],
      gender: ['', Validators.compose([
        Validators.required
      ])],
      birthday: ['', Validators.compose([
        Validators.required
      ])],
      city: ['', Validators.compose([
        Validators.required
      ])],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{9}'),
      ])],
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

  submit(userFields: any): void{
    if (this.user.valid && this.isNotRegisterJet(userFields.email)){

      console.log(userFields);
      //TODO make a register on data base
      this.navCtrl.setRoot(HomePage, userFields);
    }
  }

  private isNotRegisterJet(email: string) {
    return this.userProvider.getUser(email.toLowerCase()) == undefined;
  }

}
