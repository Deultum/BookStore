
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Book } from '../../types/book';

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
    
  };

  constructor(private apiService: ApiService) { }

  createBook() {
    // Call the API service's postBook() method to make the POST request
    this.apiService.postBook(this.book).subscribe(
      (response) => {
        console.log('Book created successfully:', response);
        // Handle the success response here, such as showing a success message
      },
      (error) => {
        console.error('Error creating book:', error);
        // Handle the error response here, such as showing an error message
      }
    );
  }
}
