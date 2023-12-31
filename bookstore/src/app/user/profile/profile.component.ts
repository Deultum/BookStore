import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userBooks: Book[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getUserBooks();
  }

  getUserBooks(): void {
    this.apiService.getBooks('/books.json').subscribe(
      (booksData: any) => {
        if (typeof booksData === 'object') {
         
          this.userBooks = Object.keys(booksData).map(key => ({ ...booksData[key], bookId: key }));
  
        
          const loggedInUserId = this.getLoggedInUserId();
          if (loggedInUserId) {
            this.userBooks = this.userBooks.filter(book => book.owner === loggedInUserId);
          }
        } else {
          this.userBooks = booksData;
        }
      },
      (error) => {
        console.error('Error fetching user books:', error);
       
        this.userBooks = [];
      }
    );
  }

  getLoggedInUserId(): string | null {
    return localStorage.getItem('userId');
  }
  editBook(bookId: string | undefined): void {
    if (!bookId) {
      console.error('Book ID is undefined.');
      return;
    }
    this.router.navigate(['/edit', bookId]);
  }
  deleteBook(bookId: string | undefined ): void {
    if (!bookId) {
      console.error('Book ID is undefined.');
      return;
    }
    if (confirm('Are you sure you want to delete this book?')) {
      this.apiService.delete(`books/${bookId}.json`).subscribe(
        () => {
         
         
          
          // Remove the deleted book from the userBooks array
          this.userBooks = this.userBooks.filter((book) => book.bookId !== bookId);
        },
        (error) => {
          console.error('Error deleting book:', error);
        }
      );
    }
  }
}
