import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public name: string | null;
  private age: string | null;
  private email: string | null;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.name = navParams.data["name"];
    this.age = navParams.data["age"];
    this.email = navParams.data["email"];
  }

  logout() {
    //TODO this do not know how it is working yet, user is not store on local storage we are using nav params
    // it works because when you push an user you are pushing their properties not the object user, them
    // the property name exist on params
    window.localStorage.removeItem("name");
    this.navCtrl.setRoot(HomePage);
  }
}
