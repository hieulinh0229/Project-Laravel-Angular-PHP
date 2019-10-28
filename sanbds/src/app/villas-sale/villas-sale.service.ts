import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VillaSale } from './villa-sale.model';
@Injectable({
  providedIn: 'root'
})
export class VillasSaleService {
  private apiUrl = "http://localhost:8000/api/villa-sale";
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getList(): Observable<VillaSale[]> {
    return this.http.get<VillaSale[]>(this.apiUrl);
  }

  getElement(id: number) : Observable<VillaSale> {
    return this.http.get<VillaSale>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}