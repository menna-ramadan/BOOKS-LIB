import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserProfile } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = environment.baseUrl;
  headers = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });

  constructor(private http: HttpClient) {}
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=subject:finance';
  getBooks() {
    return this.http.get<any>(this.apiUrl);
  }


  getBook(id: any) {

  }



}
