import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HouseSale } from './house-sale.model';

@Injectable({
  providedIn: 'root'
})
export class HousesSaleService {

  private apiUrl = "http://localhost:8000/api/house-sale";
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getHouseSale(): Observable<HouseSale[]> {
    return this.http.get<HouseSale[]>(this.apiUrl);
  }

  getHouseSaleById(id: number) : Observable<HouseSale> {
    return this.http.get<HouseSale>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}

