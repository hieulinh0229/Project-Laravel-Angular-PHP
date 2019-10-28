import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlotSale } from './plot-sale.model';
@Injectable({
  providedIn: 'root'
})
export class PlotsSaleService {

  private apiUrl = "http://localhost:8000/api/plot-sale";
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getPlotSale(): Observable<PlotSale[]> {
    return this.http.get<PlotSale[]>(this.apiUrl);
  }

  getPlotSaleById(id: number) : Observable<PlotSale> {
    return this.http.get<PlotSale>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
