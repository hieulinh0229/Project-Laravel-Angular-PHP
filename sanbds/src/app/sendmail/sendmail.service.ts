import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {
  apiUrl = "http://127.0.0.1:8000/api/lichhen"
  constructor(private http: HttpClient) { }

  sendmail(sendmail): Observable<any> {
    return this.http.post(`${this.apiUrl}`, sendmail)
  }
}