import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EditBookComponent } from './edit-book/edit-book.component';



@NgModule({
  declarations: [
    CreateBookComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  exports:[CreateBookComponent],
})
export class BooksModule { }
