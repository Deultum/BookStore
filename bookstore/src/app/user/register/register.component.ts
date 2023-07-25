import { Component, OnInit } from '@angular/core';
import { NgForm, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiService } from '../../api.service'; // Import the ApiService

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  registerData = {
    
    email: '',
    password: '',
    repeatPassword: ''
  };

  constructor(private apiService: ApiService) { }

  // ngOnInit() { }

  // Custom validator function to check if passwords match
  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const repeatPassword = control.get('repeatPassword')?.value;

    return password === repeatPassword ? null : { passwordMismatch: true };
  };

  onRegister(registerForm: NgForm) {
    if (registerForm.valid) {
      // Send the registerData to the API endpoint
      this.apiService.post('users/register', this.registerData).subscribe(
        (response) => {
          console.log('Registration success:', response);
        
        },
        (error) => {
          console.error('Registration failed:', error);
          
        }
      );
    }
  }
}
