import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
   // Set this to true when the user is logged in, otherwise false

  constructor(private authService: AuthService, private router: Router) { }

  isLoggedIn = false;
  ngOnInit() {
    // Subscribe to the login status changes
    
    this.authService.isLoggedIn.subscribe((loggedIn: boolean) => {
      
      this.isLoggedIn = loggedIn;
      console.log(loggedIn);
     
      
    });
  }
  onLogout() {
    // Call the logout() method of the AuthService to log out the user
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
