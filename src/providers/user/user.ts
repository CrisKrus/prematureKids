import {Injectable} from '@angular/core';

@Injectable()
export class UserProvider {
  static userUrl = '/src/providers/user/users.json';
  //TODO users need to have email property because, when you push one to a page you are pushing the properties not the key
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
        password: "1234"
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
