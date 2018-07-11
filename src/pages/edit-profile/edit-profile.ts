import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MunicipalitiesProvider} from "../../providers/municipalities/municipalities";
import {UserProvider} from "../../providers/user/user";

@Component({
    selector: 'page-edit-profile',
    templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
    user: FormGroup;
    protected municipalities: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public formBuilder: FormBuilder,
                public municipalitiesProvider: MunicipalitiesProvider,
                public userProvider: UserProvider) {
        this.municipalities = this.municipalitiesProvider.getMunicipalities();
        this.addInputValidators();
    }

    ionViewDidLoad() {
        let user = this.navParams.get('user');
        this.user.setValue({
            city: user.city,
            email: user.email,
            gender: user.gender,
            name: user.name,
            phone: user.phone,
            birthday: user.birthday
        });
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
        });
    }

    saveProfileChanges(userData) {
        this.userProvider
            .editProfileData(userData, this.userProvider.uid)
            .then(() => this.navCtrl.pop());
    }
}
