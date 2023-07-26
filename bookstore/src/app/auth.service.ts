import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    // Retrieve the isLoggedIn state from local storage on service initialization
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== null) {
      this.loggedIn.next(JSON.parse(isLoggedIn));
    }
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login() {
    this.loggedIn.next(true);
    // Save the isLoggedIn state to local storage
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  }

  logout() {
    this.loggedIn.next(false);
    // Save the isLoggedIn state to local storage
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
  }
}
