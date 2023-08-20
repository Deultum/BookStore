import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthActivate  {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          // If not logged in, navigate to the login page
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
