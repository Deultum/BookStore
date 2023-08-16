import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Book } from '../../types/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  errorMessage: string = '';
  book: Book | null = null;
  bookId: string | null = null;
  loggedInUserId: string | null = null;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loggedInUserId = localStorage.getItem('userId');
    this.route.params.subscribe((params) => {
      this.bookId = params['id'];
      //console.log(this.bookId);

      if (this.bookId) { 
        this.apiService.getBookById(this.bookId).subscribe((book) => {
          if (book && book.owner === this.loggedInUserId) {
            this.book = book;
          } else {
            this.router.navigate(['/404']); 
          }
        });
      } else {
        this.router.navigate(['/books']); 
      }
    });
  }

  onSubmit(editForm: NgForm): void {
    if (editForm.valid && this.book && this.bookId) {
      this.apiService.updateBook(this.bookId, this.book).subscribe(
        () => {
         
          this.router.navigate(['/catalog']);
        },
        (error) => {
         
          this.errorMessage = `${error.error.message}`;
        }
      );
    }
  }
}
