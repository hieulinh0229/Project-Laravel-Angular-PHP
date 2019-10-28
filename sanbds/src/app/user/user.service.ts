import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://localhost:8000/api";
  // private httpOptions = {
  //   headers : new HttpHeaders({
  //     'Content-Type' : 'application/json'
  //   })
  // }
  constructor(private http: HttpClient) { }

  getAll() : Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getProfile() : Observable<User> {
    const currentUser = localStorage.getItem('currentUser');
    console.log(currentUser);
    return this.http.get<User>(`${this.apiUrl}/auth`);
  }
}

