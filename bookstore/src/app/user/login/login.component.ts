import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  

  constructor(private apiService: ApiService, private router: Router, private authService: AuthService) { }



  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      // Send the registerData to the API endpoint
      this.apiService.post('users/login', this.loginData).subscribe(
        (response: any) => {
          console.log('Login success:', response);
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
