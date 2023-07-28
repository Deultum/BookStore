import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./types/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn = new BehaviorSubject<boolean>(false);
  public user?: User;
  public userId: string | undefined;
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
  getUserData() {
    return this.user;
  }

  // This function sets the user data after a successful login
  setUserData(userData: User) {

    this.user = userData;
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  getUserId() {
    return this.userId; // Removed 'private' to make it accessible
  }
}
