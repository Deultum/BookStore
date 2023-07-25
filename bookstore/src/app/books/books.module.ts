import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[CreateBookComponent],
})
export class BooksModule { }
