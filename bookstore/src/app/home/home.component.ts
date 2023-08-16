import { Component, OnInit } from '@angular/core';
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
      
        if (typeof booksData === 'object') {
         
          this.books = Object.values(booksData);
          
        } else {
          
          this.books = booksData;
        }

        this.loading = false;
       
      },
      (error) => {
        console.error('Error fetching books:', error);
        this.loading = true;
      }
    );
  }
}
