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
      (books: Book[]) => { // Corrected the parameter to receive an array of books
        this.books = books;
        this.loading = false;
        console.log({ books });
      },
      (error) => {
        console.error('Error fetching books:', error);
        this.loading = false;
      }
    );
  }
}
