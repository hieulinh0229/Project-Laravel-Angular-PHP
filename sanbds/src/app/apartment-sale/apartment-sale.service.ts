import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApartmentSale } from './apartment-sale';

@Injectable({
  providedIn: 'root'
})
export class ApartmentSaleService {

  private apiUrl = 'http://localhost:8000/api/apartment-sale';
  private httpOptions = {
    headers: new HttpHeaders({

      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getApartmentSales(): Observable<ApartmentSale[]>  {
    return this.http.get<ApartmentSale[]>(this.apiUrl);
  }

  getApartmentSaleById(id: number): Observable<ApartmentSale> {
    return this.http.get<ApartmentSale>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
