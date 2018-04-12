import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class AuthProvider {

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  registerUser(email: string, password: string){
      return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
          .then((res) => {
              console.log('Usuario creado');
          })
          .catch(err => Promise.reject(err));
  }

}
