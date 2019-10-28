import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlotRent } from './plot-rent.model';
@Injectable({
  providedIn: 'root'
})
export class PlotsRentService {
  private apiUrl = "http://localhost:8000/api/plot-rent";
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getPlotRent(): Observable<PlotRent[]> {
    return this.http.get<PlotRent[]>(this.apiUrl);
  }

  getPlotRentById(id: number) : Observable<PlotRent> {
    return this.http.get<PlotRent>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}