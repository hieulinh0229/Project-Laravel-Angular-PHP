import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SendMail } from 'app/_models/sendmail.model';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  private apiUrl: string = "http://localhost:8000/api/lichhen";
  private apiUrlreturn: string = "http://localhost:8000/api/create";
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getList() :Observable<SendMail[]> {
    return this.http.get<SendMail[]>(`${this.apiUrl}`);
  }

  getSendMailById(id: number) : Observable<SendMail> {
    return this.http.get<SendMail>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  updateStatus(data : any, id) : Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, data);
  }

  createReturnSendmail(data:FormData): Observable<SendMail> {
    return this.http.post<SendMail>(`${this.apiUrlreturn}/returnsendmail`,data, this.httpOptions);
  }
}
