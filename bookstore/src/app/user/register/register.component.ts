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
      console.log(this.registerData);
    }
  }
}
