import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VillaSale } from 'src/app/villas-sale/villa-sale.model';
import { VillaRent } from 'src/app/villa-rent/villa-rent.model';
import { HouseSale } from 'src/app/houses-sale/house-sale.model';
import { ApartmentRent } from 'src/app/apartment-rent/apartment-rent';
import { ApartmentSale } from 'src/app/apartment-sale/apartment-sale';
import { PlotSale } from 'src/app/plots-sale/plot-sale.model';
import { PlotRent } from 'src/app/plots-rent/plot-rent.model';
import { HouseRent } from 'src/app/houses-rent/house-rent';
import { FeedBack } from 'src/app/feedback/feedback.model';
@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private apiUrl = "http://localhost:8000/api/create";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
  }
  constructor(private http: HttpClient) {

  }
  createVillaSale(villSale: FormData): Observable<VillaSale> {
    return this.http.post<VillaSale>(`${this.apiUrl}/villa-sale`, villSale, this.httpOptions);
  }
  createVillaRent(villRent: FormData): Observable<VillaRent> {
    return this.http.post<VillaRent>(`${this.apiUrl}/villa-rent`, villRent, this.httpOptions);
  }
  createHouseSale(houseSale: FormData): Observable<HouseSale> {
    return this.http.post<HouseSale>(`${this.apiUrl}/house-sale`, houseSale, this.httpOptions);
  }
  createApartmentRent(apartmentRent): Observable<ApartmentRent> {
    return this.http.post<ApartmentRent>(`${this.apiUrl}/apartment-rent`, apartmentRent, this.httpOptions);
  }
  createApartmentSale(apartmentSale: FormData): Observable<ApartmentSale> {
    return this.http.post<ApartmentSale>(`${this.apiUrl}/apartment-sale`, apartmentSale, this.httpOptions);
  }
  createPlotSale(plotSale: FormData): Observable<PlotSale> {
    return this.http.post<PlotSale>(`${this.apiUrl}/plot-sale`, plotSale, this.httpOptions);
  }
  createPlotRent(plotRent: FormData): Observable<PlotRent> {
    return this.http.post<PlotRent>(`${this.apiUrl}/plot-rent`, plotRent, this.httpOptions);
  }
  createHouseRent(houseRent: FormData): Observable<HouseRent> {
    return this.http.post<HouseRent>(`${this.apiUrl}/house-rent`, houseRent, this.httpOptions);
  }
  createFeedBack(feedBack:FormData): Observable<FeedBack> {
    return this.http.post<FeedBack>(`${this.apiUrl}/feedback`,feedBack, this.httpOptions);
  }
}
