
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Book } from '../../types/book';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  book: Book = {
    title: '',
    author: '',
    img: '',
    category: '',
    owner: '',
  };

  constructor(private apiService: ApiService, private router: Router) { }

  createBook(bookForm: NgForm) {
    this.book.owner = localStorage.getItem('userId') || "";
    // Call the API service's postBook() method to make the POST request
    if (bookForm.valid) {
      this.apiService.postBook(this.book).subscribe(
        (response) => {
          console.log('Book created successfully:', response);
          this.router.navigate(['/catalog']);
  
        },
        (error) => {
          console.error('Error creating book:', error);
          // Handle the error response here, such as showing an error message
        }
      );
      
    }

  }
}
