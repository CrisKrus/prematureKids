import {Injectable} from '@angular/core';

@Injectable()
export class UserProvider {
  static userUrl = '/src/providers/user/users.json';
  private mockUsers =
    {
      "cristian@correo.com": {
        name: "Cristian Suarez Vera",
        age: 22,
        gender: "male",
        password: "1234",
        type: "doctor",
        email: "cristian@correo.com"
      },
      "antonio@correo.com": {
        name: "Antonio Perez Perez",
        age: 34,
        gender: "male",
        password: "1234",
        type: "patient",
        email: "antonio@correo.com",
        exercises: {}
      }
    };

  constructor() {
  }

  getUser(email: string){
    return this.getUsers()[email];
  }

  private getUsers() {
    return this.mockUsers;
  }
}
