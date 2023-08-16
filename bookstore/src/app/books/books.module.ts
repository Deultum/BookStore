import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ReadBookComponent } from './read-book/read-book.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    CreateBookComponent,
    EditBookComponent,
    ReadBookComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports:[CreateBookComponent],
})
export class BooksModule { }
