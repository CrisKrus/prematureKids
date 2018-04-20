import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";

@Injectable()
export class AuthProvider {

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  signupUser(userData) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(userData.email, userData.password)
      .then((user) => {
        this.setUserData(user, userData);
      })
      .catch(err => Promise.reject(err));
  }

  login(email: string, password: string): Promise<any> {
    //TODO check error code and show message on spanish
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth?hl=es-419#createUserWithEmailAndPassword
    return this.angularFireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(user => Promise.resolve(user))
      .catch(err => Promise.reject(err))
  }

  get Session() {
    return this.angularFireAuth.authState;
  }

  get uid() {
    return this.angularFireAuth.auth.currentUser.uid;
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

  private setUserData(user, userData) {
    firebase.database().ref('users/' + user.uid).set(userData);
  }
}
