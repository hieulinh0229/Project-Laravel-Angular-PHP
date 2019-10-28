import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = "http://localhost:8000/api/project";
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  getProjectById(id: number) : Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}