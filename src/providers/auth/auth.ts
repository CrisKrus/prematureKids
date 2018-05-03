import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";

@Injectable()
export class AuthProvider {
  constructor(private angularFireAuth: AngularFireAuth) {
  }

  //TODO create two separate sets of users one for doctors another for patients
  // user/patients/uid and user/doctors/uid
  // them have to change data access
  createUser(userData) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(userData.email, userData.password)
      .then((user) => {
        delete userData.password;
        this.setUserData(user, userData);
        return Promise.resolve(user);
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

  get session() {
    return this.angularFireAuth.authState;
  }

  get uid() {
    // when new user is register, loads automatically tabs page and try to charge uid of "logged" user
    // mean "logged" bc he is register but not logged
    return this.angularFireAuth.auth.currentUser.uid;
  }

  get userType(){
    return new Promise(resolve => {
      firebase.database().ref('users/' + this.uid + '/type')
        .on('value', (snapshot) => {
          resolve(snapshot.val());
        }, (error) => {
          //TODO handle error
          error(error.code);
        });
    });
  }

  get users(){
    return new Promise(resolve => {
      firebase.database().ref('users/')
        .on('value', (snapshot) => {
          resolve(snapshot.val());
        }, (error) => {
          error(error.code);
        });
    });
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

  private setUserData(user, userData) {
    firebase.database().ref('users/' + user.uid).set(userData);
  }
}
