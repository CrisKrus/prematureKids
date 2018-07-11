import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";

@Injectable()
export class UserProvider {
    constructor(private angularFireAuth: AngularFireAuth) {
    }

    //TODO create two separate sets of users one for doctors another for patients
    // user/patients/uid and user/doctors/uid
    // users need to have by default observation = "" and done = false
    createUser(userData) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(userData.email, userData.password)
            .then((user) => {
                delete userData.password;
                this.setUserData(user, userData);
                return Promise.resolve(user);
            })
            .catch(err => Promise.reject(err));
    }

    // them have to change data access
    private setUserData(user, userData) {
        //TODO should be a promise?
        firebase.database().ref('users/' + user.uid).set(userData);
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

    get userSessionType() {
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

    get users() {
        return new Promise(resolve => {
            firebase.database().ref('users/')
                .on('value', (snapshot) => {
                    resolve(snapshot.val());
                }, (error) => {
                    error(error.code);
                });
        });
    }

    getUser(userUid: string) {
        return new Promise(resolve => {
            firebase.database().ref('users/' + userUid)
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

    assignExercise(exerciseId, userUid, observations = "") {
        let exercise = {};
        exercise[exerciseId] = {"done": false, "observations": observations};
        return firebase.database().ref('users/' + userUid + '/exercises')
            .update(exercise);
    }

    removeExercise(exerciseId, userUid) {
        return firebase.database().ref('users/' + userUid + '/exercises/' + exerciseId).remove();
    }

    markExerciseDone(exerciseId: string, userUid: string, timeStamp: Date) {
        let data = {};
        data['done'] = timeStamp;
        return firebase.database()
            .ref('users/' + userUid + '/exercises/' + exerciseId)
            .update(data);
    }

    isExerciseDone(exercise) {
        return exercise.done != undefined && exercise.done != false;
    }

    updateTimestampLastViewPatientHistory(doctorId, patientId) {
        let data = {};
        data[patientId] = new Date();
        firebase.database()
            .ref('users/' + doctorId + '/patients/')
            .update(data);
    }

    editProfileData(userData, uid) {
        return firebase.database().ref('/users/' + uid)
            .update(userData);
    }
}
