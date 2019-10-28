import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VillaRent } from './villa-rent.model';
@Injectable({
  providedIn: 'root'
})
export class VillasRentService {

  private apiUrl = "http://localhost:8000/api/villa-rent";
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getList(): Observable<VillaRent[]> {
    return this.http.get<VillaRent[]>(this.apiUrl);
  }

  getElement(id: number) : Observable<VillaRent> {
    return this.http.get<VillaRent>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}