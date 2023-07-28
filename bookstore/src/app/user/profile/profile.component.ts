import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userBooks: Book[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUserBooks();
  }

  getUserBooks(): void {
    this.apiService.getBooks('/books.json').subscribe(
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

  getLoggedInUserId(): string | null {
    return localStorage.getItem('userId');
  }
}
