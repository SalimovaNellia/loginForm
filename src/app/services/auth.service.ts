import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;

  constructor() { }

  public login(email, password) {
    this.currentUser.login = email;
    this.currentUser.password = password;
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}

