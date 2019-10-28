import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { ApartmentRent } from './apartment-rent';
@Injectable({
  providedIn: 'root'
})
export class ApartmentRentService {
  private apiUrl = 'http://localhost:8000/api/apartment-rent';
  private httpOptions = {
    headers: new HttpHeaders({

      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getApartmentRents(): Observable<ApartmentRent[]> {
    return this.http.get<ApartmentRent[]>(this.apiUrl);
  }

  getApartmentRentById(id: number): Observable<ApartmentRent> {
    return this.http.get<ApartmentRent>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
