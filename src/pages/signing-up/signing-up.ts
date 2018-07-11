import {Component} from '@angular/core';
import {ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {MunicipalitiesProvider} from "../../providers/municipalities/municipalities";
import {UserProvider} from "../../providers/user/user";

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
                private userProvider: UserProvider) {
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
            // day: ['', Validators.compose([
            //     Validators.required
            // ])],
            // month: ['', Validators.compose([
            //     Validators.required
            // ])],
            // year: ['', Validators.compose([
            //     Validators.required
            // ])],
            city: ['', Validators.compose([
                Validators.required
            ])],
            birthday: ['', Validators.compose([
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
            ])],
            password_confirmation: ['', Validators.compose([
                Validators.required,
                Validators.minLength(8),
            ])],
        });
    }


    submit(userFields: any) {
        if (this.arePasswordsEquals(userFields)) {
            this.userProvider.createUser(userFields);
        }
    }

    private arePasswordsEquals(userFields) {
        if (userFields.password != userFields.password_confirmation) {
            this.showWarning("Las contraseñas no coinciden");
            return false;
        } else {
            return true
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

}
