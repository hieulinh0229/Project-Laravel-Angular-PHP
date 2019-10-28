import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartialsService {

  private apiGet = "http://localhost:8000/api/get";
  constructor(private http: HttpClient) { }

  getLocal(): Observable<any> {
    return this.http.get<any>(`${this.apiGet}/local`);
  }
}
