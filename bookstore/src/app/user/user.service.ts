import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
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
}
