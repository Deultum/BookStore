import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Book } from '../../types/book';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css'],
})
export class ReadBookComponent implements OnInit {
  bookId: string | null = null;
  book: Book | null = null;
  content: string | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      this.bookId = params['id'];
      

      if (this.bookId) { // Ensure that bookId is not null before calling the API
        this.apiService.getBookById(this.bookId).subscribe((book) => {
          if (book) {
            this.book = book;
          //console.log(book);
          
            
          } else {
            this.router.navigate(['/404']); 
          }
        });
      } else {
        this.router.navigate(['/books']); 
      }
    });
}
}