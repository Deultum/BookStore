import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn = false; // Set this to true when the user is logged in, otherwise false

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // Subscribe to the login status changes
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }
  onLogout() {
    // Call the logout() method of the AuthService to log out the user
    this.authService.logout();
  }
}
