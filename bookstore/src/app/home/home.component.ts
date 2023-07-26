import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading = true;
  books: Book[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBooks('/books.json').subscribe(
      (booksData: any) => {
        // Check if the data returned is an object
        if (typeof booksData === 'object') {
          // Convert the object values to an array
          this.books = Object.values(booksData);
        } else {
          // If it's already an array, you can assign it directly
          this.books = booksData;
        }

        this.loading = false;
        console.log({ books: this.books });
      },
      (error) => {
        console.error('Error fetching books:', error);
        this.loading = false;
      }
    );
  }
}
