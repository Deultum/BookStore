import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bookstore';

  isLoggedIn = false;

  ngOnInit(): void {
   
    const authToken = localStorage.getItem('authToken');
    this.isLoggedIn = !!authToken;
  }
}
