import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class AuthProvider {

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  register(email: string, password: string){
      return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
          .then((res) => {
              console.log(res);
          })
          .catch(err => Promise.reject(err));
  }

  login(email: string, password: string){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => Promise.resolve(user))
      .catch(err => Promise.reject(err))
  }

  get Session(){
    return this.angularFireAuth.authState;
  }

  logout(){
    this.angularFireAuth.auth.signOut().then(() => {
      console.log('Logout complete');
    })
  }
}
