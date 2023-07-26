// login.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/types/user'; // Import the User type

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  constructor(private apiService: ApiService, private router: Router, private authService: AuthService) { }

  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      this.apiService.post('users/login', this.loginData).subscribe(
        (response: any) => {
          console.log('Login success:', response);

          // Assuming the API returns the user data in the response
          const userData: User = response.userData;

        // Set the user data in the AuthService
        this.authService.setUserData(userData);

          // Call the login() method to set isLoggedIn to true
          this.authService.login();

          this.router.navigate(['/']);
        },
        (error: any) => {
          console.error('Login failed:', error);
        }
      );
    }
  }
}
