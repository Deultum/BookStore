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
       
        if (typeof booksData === 'object') {
       

          
          this.books = Object.keys(booksData).map(bookId => ({
            bookId,
            ...booksData[bookId]
          }));
        } else {
         
          this.books = booksData;
        }
        this.categories = Array.from(new Set(this.books.map(book => book.category)));

        this.filteredBooks = this.books; 
        this.loading = false;
       // console.log({ books: this.books });
      },
      (error) => {
        console.error('Error fetching books:', error);
        this.loading = true;
      }
    );
  }
  readBook(bookId: string | undefined): void {
    if (!bookId) {
      console.error('Book ID is undefined.');
      return;
    }
    this.router.navigate(['/read', bookId]);
  }

  filterByCategory(category: string): void {
    if (category === '') {
      
      this.filteredBooks = this.books;
    } else {
      
      this.filteredBooks = this.books.filter(book => book.category === category);
    }
  }
}
