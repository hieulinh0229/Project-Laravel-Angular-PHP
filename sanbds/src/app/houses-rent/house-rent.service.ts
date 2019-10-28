import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HouseRent } from './house-rent';

@Injectable({
  providedIn: 'root'
})
export class HouseRentService {

  private apiUrl = "http://localhost:8000/api/house-rent";
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getHouseRent(): Observable<HouseRent[]> {
    return this.http.get<HouseRent[]>(this.apiUrl);
  }

  getHouseRentById(id: number) : Observable<HouseRent> {
    return this.http.get<HouseRent>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}

