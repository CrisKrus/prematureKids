import {Injectable} from '@angular/core';

@Injectable()
export class UserProvider {
  static userUrl = '/src/providers/user/users.json';
  private mockUsers =
    {
      "cristian@correo.com": {
        name: "Cristian Suarez Vera",
        gender: "male",
        birthday: "1995-12-29",
        city: "Telde",
        phone: "686722255",
        email: "cristian@correo.com",
        type: "doctor",
        password: "1234",
        patients: {
          "antonio@correo.com": "antonio@correo.com",
          "one@correo.com": "one@correo.com",
          "three@correo.com": "three@correo.com"
        }
      },
      "antonio@correo.com": {
        name: "Antonio Perez Perez",
        gender: "male",
        birthday: "1990-04-22",
        city: "Las Palmas",
        phone: "444555666",
        email: "antonio@correo.com",
        type: "patient",
        password: "1234",
        assignedExercises: {
          "001": {
            done: {
              "2018-02-20": true,
              "2018-02-22": true,
              "2018-02-24": true,
              "2018-02-26": true,
              "2018-03-04": true,
              "2018-03-06": true,
              "2018-03-09": true,
              "2018-03-11": true,
            }
          },
          "002": {
            done: {
              "2018-02-20": true,
              "2018-02-22": true,
              "2018-02-24": true,
              "2018-03-06": true,
              "2018-03-09": true,
              "2018-03-11": true,
            }
          },
          "003": {
            done: {
              "2018-02-22": true,
              "2018-02-24": true,
              "2018-02-26": true,
              "2018-03-04": true,
              "2018-03-06": true,
            }
          }
        }
      },
      "one@correo.com": {
        name: "one one one",
        gender: "female",
        birthday: "1990-04-22",
        city: "Las Palmas",
        phone: "444555666",
        email: "one@correo.com",
        type: "patient",
        password: "1234",
        assignedExercises: {}
      },
      "two@correo.com": {
        name: "Two two two",
        gender: "male",
        birthday: "1990-04-22",
        city: "Las Palmas",
        phone: "444555666",
        email: "two@correo.com",
        type: "doctor",
        password: "1234",
        patients: {}
      },
      "three@correo.com": {
        name: "Three three three",
        gender: "male",
        birthday: "1990-04-22",
        city: "Las Palmas",
        phone: "444555666",
        email: "three@correo.com",
        type: "patient",
        password: "1234",
        assignedExercises: {}
      },
      "four@correo.com": {
        name: "Four four four",
        gender: "male",
        birthday: "1990-04-22",
        city: "Las Palmas",
        phone: "444555666",
        email: "four@correo.com",
        type: "patient",
        password: "1234",
        assignedExercises: {}
      },
      "five@correo.com": {
        name: "Five five five",
        gender: "female",
        birthday: "1990-04-22",
        city: "Las Palmas",
        phone: "444555666",
        email: "five@correo.com",
        type: "doctor",
        password: "1234",
        patients: {}
      },
      "six@correo.com": {
        name: "Six six six",
        gender: "male",
        birthday: "1990-04-22",
        city: "Las Palmas",
        phone: "444555666",
        email: "six@correo.com",
        type: "patient",
        password: "1234",
        assignedExercises: {}
      },
      "doctor@correo.com": {
        name: "Doc thor",
        gender: "male",
        birthday: "0001-02-29",
        city: "La Aldea de San Nicolás",
        phone: "000010229",
        email: "doctor@correo.com",
        type: "doctor",
        password: "Mjolnir",
        patients: {}
      }
    };

  constructor() {
  }

  getUser(email: string){
    return this.mockUsers[email];
  }

  getUsers() {
    return this.mockUsers;
  }
}
