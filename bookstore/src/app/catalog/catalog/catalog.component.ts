import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Book } from 'src/app/types/book';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  loading = true;
  books: Book[] = [];
  isLoggedIn = false;
  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((loggedIn: boolean) => {
      
      this.isLoggedIn = loggedIn;
      
      
    })

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
