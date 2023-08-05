import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Book } from 'src/app/types/book';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  loading = true;
  books: Book[] = [];
  isLoggedIn = false;
  categories: string[] = [];
  filteredBooks: Book[] = [];

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;

    });

    this.apiService.getBooks('/books.json').subscribe(
      (booksData: any) => {
        // Check if the data returned is an object
        if (typeof booksData === 'object') {
          console.log(Object.keys(booksData));
          
          // Convert the object values to an array
          this.books = Object.values(booksData);
        } else {
          // If it's already an array, you can assign it directly
          this.books = booksData;
        }
        this.categories = Array.from(new Set(this.books.map(book => book.category)));

        this.filteredBooks = this.books; // Initially, show all books
        this.loading = false;
        console.log({ books: this.books });
      },
      (error) => {
        console.error('Error fetching books:', error);
        this.loading = false;
      }
    );
  }

  filterByCategory(category: string): void {
    if (category === '') {
      // If 'All Categories' is selected, show all books
      this.filteredBooks = this.books;
    } else {
      // Otherwise, filter books by the selected category
      this.filteredBooks = this.books.filter(book => book.category === category);
    }
  }
}
