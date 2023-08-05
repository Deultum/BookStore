import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../src/app/environments/environment'; // Import the environment object
import { Book } from './types/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = environment.apiUrl;
  private booksUrl: string = environment.booksUrl // Access the API URL from the environment;
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

    // Make the POST request to create a new book
    return this.http.post<Book>(`${this.booksUrl}/books.json`, book, { headers });
  }
  getBookById(bookId: string): Observable<Book> {
    const url = `${this.booksUrl}/books/${bookId}.json`;
    return this.http.get<Book>(url);
  }
  deleteBookById(bookId: string): Observable<any> {
    const url = `${this.booksUrl}/books/${bookId}.json`;
    return this.http.delete(url);
  }
  // HTTP POST request
  post(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post(url, data);
  }

  // HTTP PUT request
  put(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.put(url, data);
  }

  // HTTP DELETE request
  delete(endpoint: string): Observable<any> {
    const url = `${this.booksUrl}/${endpoint}`;
    return this.http.delete(url);
  }
}
