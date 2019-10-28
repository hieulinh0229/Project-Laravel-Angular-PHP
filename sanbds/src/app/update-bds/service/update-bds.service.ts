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
@Injectable({
  providedIn: 'root'
})
export class UpdateBdsService {

  private apiUrl = "http://localhost:8000/api";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {

  }
  getElementVillaSale(id: number): Observable<VillaSale> {
    return this.http.get<VillaSale>(`${this.apiUrl}/villa-sale/${id}`, this.httpOptions);
  }
  updateVillaSale(villaSale: VillaSale): Observable<VillaSale> {
    return this.http.post<VillaSale>(`${this.apiUrl}/update/villa-sale`, villaSale, this.httpOptions);
  }
  getElementVillaRent(id: number): Observable<VillaRent> {
    return this.http.get<VillaRent>(`${this.apiUrl}/villa-rent/${id}`, this.httpOptions);
  }
  updateVillaRent(villaRent: VillaRent): Observable<VillaRent> {
    return this.http.post<VillaRent>(`${this.apiUrl}/update/villa-rent`, villaRent, this.httpOptions);
  }
  getElementPlotSale(id: number): Observable<PlotSale> {
    return this.http.get<PlotSale>(`${this.apiUrl}/plot-sale/${id}`, this.httpOptions);
  }
  updatePlotSale(plotSale: PlotSale): Observable<PlotSale> {
    return this.http.post<PlotSale>(`${this.apiUrl}/update/plot-sale`, plotSale, this.httpOptions);
  }
  getElementPlotRent(id: number): Observable<PlotRent> {
    return this.http.get<PlotRent>(`${this.apiUrl}/plot-rent/${id}`, this.httpOptions);
  }
  updatePlotRent(plotRent: PlotRent): Observable<PlotRent> {
    return this.http.post<PlotRent>(`${this.apiUrl}/update/plot-rent`, plotRent, this.httpOptions);
  }
  getElementHouseSale(id: number): Observable<HouseSale> {
    return this.http.get<HouseSale>(`${this.apiUrl}/house-sale/${id}`, this.httpOptions);
  }
  UpdateHouseSale(houseSale: HouseSale): Observable<HouseSale> {
    return this.http.post<HouseSale>(`${this.apiUrl}/update/house-sale`, houseSale, this.httpOptions);
  }
  getElementApartmentSale(id: number): Observable<ApartmentSale> {
    return this.http.get<ApartmentSale>(`${this.apiUrl}/apartment-sale/${id}`, this.httpOptions);
  }
  updateApartmentSale(apartmentSale: ApartmentSale): Observable<ApartmentSale> {
    return this.http.post<ApartmentSale>(`${this.apiUrl}/update/apartment-sale`, apartmentSale, this.httpOptions);
  }
  getElementApartmentRent(id: number): Observable<ApartmentRent> {
    return this.http.get<ApartmentRent>(`${this.apiUrl}/apartment-rent/${id}`, this.httpOptions);
  }
  updateApartmentRent(apartmentRent: ApartmentRent): Observable<ApartmentRent> {
    return this.http.post<ApartmentRent>(`${this.apiUrl}/update/apartment-rent`, apartmentRent, this.httpOptions);
  }
  getElementHouseRent(id: number): Observable<HouseRent> {
    return this.http.get<HouseRent>(`${this.apiUrl}/house-rent/${id}`, this.httpOptions);
  }
  updateHouseRent(houseRent: HouseRent): Observable<HouseRent> {
    return this.http.post<HouseRent>(`${this.apiUrl}/update/house-rent`, houseRent, this.httpOptions);
  }
}