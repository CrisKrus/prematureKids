import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {UserProvider} from "../../providers/user/user";
import {MunicipalitiesProvider} from "../../providers/municipalities/municipalities";
import {TabsComponent} from "../tabs/tabs";

@Component({
  selector: 'page-signingUp',
  templateUrl: 'signing-up.html',
})
export class SigningUpPage {
  user: FormGroup;
  private municipalities: any;

  constructor(public navCtrl: NavController,
              private formBuilder: FormBuilder,
              private userProvider: UserProvider,
              private municipalitiesProvider: MunicipalitiesProvider,
              private toastCtrl: ToastController) {
    this.addInputValidators();
    this.municipalities = this.municipalitiesProvider.getMunicipalities();
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
    let birthday = new Date (userFields.year + "-" + userFields.month + "-" + userFields.day);

    if (this.user.valid && this.isNotRegisterJet(userFields.email)){
      if(this.isNotValidDate(birthday)) {
        this.showWarning("La fecha introducida no es valida");
      }else {
        //TODO make a register on data base
        userFields.birthday = birthday;
        localStorage.setItem('user', JSON.stringify(userFields));
        this.navCtrl.setRoot(TabsComponent);
      }
    }
  }

  private isNotValidDate(birthday: Date) {
    return birthday.toString() == 'Invalid Date';
  }

  private isNotRegisterJet(email: string) {
    return this.userProvider.getUser(email.toLowerCase()) == undefined;
  }

  private showWarning(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
