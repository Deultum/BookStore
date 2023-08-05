import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Book } from '../../types/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  book: Book | null = null;
  loggedInUserId: string | null = null;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loggedInUserId = localStorage.getItem('userId');
    this.route.params.subscribe((params) => {
      const bookId = params['id'];
      console.log(bookId);
      
      this.apiService.getBookById(bookId).subscribe((book) => {
        if (book.owner === this.loggedInUserId) {
          this.book = book;
        } else {
         
          this.router.navigate(['/books']); // Redirect to the books list page
        }
      });
    });
  }

  onSubmit(): void {
    console.log(this.book);
    
    if (this.book && this.book.bookId) { // Check if book and bookId are defined
      this.apiService.updateBook(this.book.bookId, this.book).subscribe(
        () => {
          // Book updated successfully, navigate to the books list page
          this.router.navigate(['/catalog']);
        },
        (error) => {
          console.error('Error updating book:', error);
          // Handle error here, show error message or take appropriate action
        }
      );
    }
  }
}
