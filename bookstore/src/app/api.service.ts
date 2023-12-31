import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../src/app/environments/environment'; 
import { Book } from './types/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = environment.apiUrl;
  private booksUrl: string = environment.booksUrl 
  private userId: string | null = localStorage.getItem('userId');
  
  constructor(private http: HttpClient) { }

  getBooksByOwner(userId: string): Observable<any> {
    const url = `${this.booksUrl}/books.json?owner=${userId}`;
    return this.http.get(url);
  }

  get(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url);
  }

  getBooks(endpoint: string): Observable<any> {
    const url = `${this.booksUrl}/${endpoint}`;
    return this.http.get(url);
  }
  postBook(book: Book): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    
    return this.http.post<Book>(`${this.booksUrl}/books.json`, book, { headers });
  }
  getBookById(bookId: string): Observable<Book> {
    const url = `${this.booksUrl}/books/${bookId}.json`;
    return this.http.get<Book>(url);
  }
  updateBook(bookId: string, bookData: Book): Observable<any> {
    const url = `${this.booksUrl}/books/${bookId}.json`;
    return this.http.patch(url, bookData);
  }
  deleteBookById(bookId: string): Observable<any> {
    const url = `${this.booksUrl}/books/${bookId}.json`;
    return this.http.delete(url);
  }
  
  post(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post(url, data);
  }


  put(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.put(url, data);
  }

  
  delete(endpoint: string): Observable<any> {
    const url = `${this.booksUrl}/${endpoint}`;
    return this.http.delete(url);
  }
}
