import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = {
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  };

  constructor() { }

  ngOnInit() { }

  onRegister(registerForm: NgForm) {
    if (registerForm.valid) {
      // Perform registration logic here (e.g., send the registerData to the server for user registration)
      console.log(this.registerData);
    }
  }
}
