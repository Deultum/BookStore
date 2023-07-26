import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { User } from 'src/app/types/user';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | undefined;
  userBooks: Book[] = [];

  constructor(private authService: AuthService, private apiService: ApiService) { }

  ngOnInit(): void {
    const userData = this.authService.getUserData();

    if (userData) {
      this.user = userData;
      this.getUserBooks();
    } else {
      console.error('User data not available.');
    }
  }

  getUserBooks(): void {
    
    this.apiService.get(`books.json?authorId=${this.user?.id}`).subscribe(
      (booksData: any) => {
        if (typeof booksData === 'object') {
          this.userBooks = Object.values(booksData);
          console.log(this.userBooks);
          
        } else {
          this.userBooks = booksData;
        }
      },
      (error) => {
        console.error('Error fetching user books:', error);
      }
    );
  }
}
