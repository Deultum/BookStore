import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();
  constructor(private http: HttpClient) { }
  user: User | undefined;
  get isLogged(): boolean {
    return !!this.user;
  }
  login(username: string, password: string) {
    // Placeholder implementation for login
    // You would typically send an API request to the server for authentication
    return true;
  }

  register(username: string, email: string, password: string) {
    // Placeholder implementation for user registration
    // You would typically send an API request to the server to create a new user
    return true;
  }

  getUserProfile() {
    // Placeholder implementation to get user profile
    // You would typically send an API request to the server to fetch user data
    return {
      username: 'JohnDoe',
      email: 'john@example.com',
      // Add more user-related information as needed
    };
  }

  getProfile() {
    return this.http
      .get<User>('/api/users/profile')
      .pipe(tap((user: User) => this.user$$.next(user)));
  }

}
