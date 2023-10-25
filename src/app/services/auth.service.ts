import { Injectable } from '@angular/core';
import { IAppUser } from '../shared/models/entities';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IAppUser;
  
  loginUser(username: string, password: string) {

    this.currentUser = {
      id: 1,
      username: 'John',
      password: '1234'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  constructor() { }
}
