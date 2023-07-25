import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../src/app/environments/environment'; // Import the environment object

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = environment.apiUrl; // Access the API URL from the environment

  constructor(private http: HttpClient) { }

  // HTTP GET request
  get(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url);
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
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.delete(url);
  }
}
