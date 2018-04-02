import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  private name: any;
  private gender: any;
  private birthday: any;
  private city: any;
  private phone: any;
  private email: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('name');
    //TODO this is not the best way to do it
    this.gender = navParams.get('gender') == 'male' ? "Hombre" : "Mujer";
    this.birthday = navParams.get('birthday');
    this.city = navParams.get('city');
    this.phone = navParams.get('phone');
    this.email = navParams.get('email');
  }

  ionViewDidLoad() {
  //  TODO if the profile is the same as the logged saw it if not don't show it (if you are patient)
  }

  editProfile() {
    console.log('Edit-profile');
  }
}
