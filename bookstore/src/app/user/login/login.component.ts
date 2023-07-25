import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginData = {
    email: '',
    password: ''
  };

  constructor() {}

 
  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      // Perform login logic here (e.g., send the loginData to the server for authentication)
      console.log(this.loginData);
    }
  }
  // Add your login form submission logic here (e.g., onLogin method)
}
