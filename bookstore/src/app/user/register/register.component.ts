import { Component, OnInit } from '@angular/core';
import { NgForm, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiService } from '../../api.service'; // Import the ApiService
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  errorMessage: string = '';
  registerData = {
    
    email: '',
    password: '',
    repeatPassword: ''
  };

  constructor(private apiService: ApiService, private router: Router) {
    
   }

  

  // Custom validator function to check if passwords match
  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const repeatPassword = control.get('repeatPassword')?.value;

    return password === repeatPassword ? null : { passwordMismatch: true };
  };
  
  onRegister(registerForm: NgForm) {
    // Check if the form is valid and the passwords match
    if (registerForm.valid && !this.passwordMatchValidator(registerForm.control)) {
      // Send the registerData to the API endpoint
      this.apiService.post('users/register', this.registerData).subscribe(
        (response) => {
       //   console.log('Registration success:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          //console.error('Registration failed:', error);
          this.errorMessage = `${error.error.message}`;
        }
      );
    } else {
      
          this.errorMessage = `Passwords missmatch`;
    }
  }
  
}
