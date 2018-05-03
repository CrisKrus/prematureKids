import {Component} from '@angular/core';
import {ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MunicipalitiesProvider} from "../../providers/municipalities/municipalities";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'page-signingUp',
  templateUrl: 'signing-up.html',
})
export class SigningUpPage {
  user: FormGroup;
  protected municipalities: any;

  constructor(private formBuilder: FormBuilder,
              private municipalitiesProvider: MunicipalitiesProvider,
              private toastCtrl: ToastController,
              private auth: AuthProvider) {
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

    if (this.user.valid){
      if(this.isNotValidDate(birthday)) {
        this.showWarning("La fecha introducida no es valida");
      }else {
        this.auth.createUser(userFields);
      }
    }
  }

  private isNotValidDate(birthday: Date) {
    return birthday.toString() == 'Invalid Date';
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
