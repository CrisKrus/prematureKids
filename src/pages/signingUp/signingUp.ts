import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {UserProvider} from "../../providers/user/user";
import {MunicipalitiesProvider} from "../../providers/municipalities/municipalities";
import {ViewProfilePage} from "../view-profile/view-profile";

@IonicPage()
@Component({
  selector: 'page-signingUp',
  templateUrl: 'signingUp.html',
})
export class SigningUpPage {
  user: FormGroup;
  private municipalities: any;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private userProvider: UserProvider, private municipalitiesProvider: MunicipalitiesProvider) {
    this.addInputValidators();
    this.municipalities = this.municipalitiesProvider.getMunicipalities();
  }

  //TODO check if the date is valid
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
      day: ['', Validators.compose([
        Validators.required
      ])],
      month: ['', Validators.compose([
        Validators.required
      ])],
      year: ['', Validators.compose([
        Validators.required
      ])],
      city: ['', Validators.compose([
        Validators.required
      ])],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{9}'),
      ])],
      type: ['', Validators.compose([
        Validators.required
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
      //TODO make a register on data base
      //TODO format date before save it
      localStorage.setItem('user', JSON.stringify(userFields));
      this.navCtrl.setRoot(ViewProfilePage);
    }
  }

  private isNotRegisterJet(email: string) {
    return this.userProvider.getUser(email.toLowerCase()) == undefined;
  }

}
