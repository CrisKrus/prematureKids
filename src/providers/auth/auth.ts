import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";

@Injectable()
export class AuthProvider {

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  register(userData) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(userData.email, userData.password)
      .then((user) => {
        this.setUserData(user, userData);
      })
      .catch(err => Promise.reject(err));
  }

  login(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => Promise.resolve(user))
      .catch(err => Promise.reject(err))
  }

  get Session() {
    return this.angularFireAuth.authState;
  }

  logout() {
    this.angularFireAuth.auth.signOut().then(() => {
      console.log('Logout complete');
    })
  }

  private setUserData(user, userData) {
    firebase.database().ref('users/' + user.uid).set(userData);
  }
}
