import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Account, post } from '../models/account';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:3000';
  isLoggedIn = false;

  constructor(private http: HttpClient) {}

  postNewAccount(data: Account) {
    return this.http.post<Account>(`${this.baseUrl}/profile`, data).pipe(
      map((res) => {
        return res;
      })
    );
  }
  getAccount(id: string) {
    return this.http.get<Account>(`${this.baseUrl}/profile/${id}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
  postPost(data: post) {
    return this.http.post<post>(`${this.baseUrl}/posts`, data).pipe(
      map((res) => {
        return res;
      })
    );
  }
  getPosts() {
    return this.http.get<post[]>(`${this.baseUrl}/posts`).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
