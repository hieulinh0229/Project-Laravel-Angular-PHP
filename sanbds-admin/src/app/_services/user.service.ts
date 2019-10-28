import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from 'app/_models/auth-user';
import { Observable } from 'rxjs';
import { UserProfile } from 'app/_models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<AuthUser[]>(`/users`);
  }

  getListUser(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(`${this.apiUrl}/user`);
  }

  getUserProfile(id: number): Observable<UserProfile> {
		return this.http.get<UserProfile>(`${this.apiUrl}/user/${id}`);
  }
  
  updateRoles(data : any, id) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/roles/${id}`, data);
  }

  getListAdmin(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin`);
  }

  getAdminProfile(id: number): Observable<UserProfile> {
		return this.http.get<UserProfile>(`${this.apiUrl}/admin/${id}`);
  }
}
