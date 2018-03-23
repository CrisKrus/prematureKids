import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {
  userUrl = 'users.json';

  constructor(public http: HttpClient) { }

  getUser(email: string){
    this.getUsers().subscribe(users => console.log(users));
  }

  private getUsers() {
    console.log(this.userUrl);
    return this.http.get(this.userUrl);
  }
}
