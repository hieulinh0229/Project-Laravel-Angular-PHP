import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../_models/feedback.model';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl: string = "http://localhost:8000/api/feedback";
  private apiUrlreturn: string = "http://localhost:8000/api/create";
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getList(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}`);
  }

  getFeedbackById(id: number) : Observable<Feedback> {
    return this.http.get<Feedback>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  createReturnFeedBack(data:FormData): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.apiUrlreturn}/returnfeedback`,data, this.httpOptions);
  }
  updateStatus(data : any, id) : Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, data);
  }
}