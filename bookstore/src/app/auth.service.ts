import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login() {
    // Your login logic here
    this.loggedIn.next(true);
  }

  logout() {
    // Your logout logic here
    this.loggedIn.next(false);
  }
}
