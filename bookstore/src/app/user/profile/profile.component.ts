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
          // Convert the booksData object to an array of books with their keys as bookId
          this.userBooks = Object.keys(booksData).map(key => ({ ...booksData[key], bookId: key }));
  
          // Filter out books that do not belong to the logged-in user
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
        // If there's an error fetching books, set userBooks to an empty array
        this.userBooks = [];
      }
    );
  }

  getLoggedInUserId(): string | null {
    return localStorage.getItem('userId');
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
