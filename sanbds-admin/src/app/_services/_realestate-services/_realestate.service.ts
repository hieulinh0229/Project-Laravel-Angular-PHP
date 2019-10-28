import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class RealestateService {

  private Class : any;
  public route : string;
  private baseApi = 'http://localhost:8000/api';
  private localRoute = 'get/local';
  constructor(private http: HttpClient) { 
    this.setREClass();
    this.setRoute();
  }

  abstract getClass();

  abstract getRoute();

  setREClass() {
    this.Class = this.getClass();
  }

  setRoute() {
    this.route = this.getRoute();
  }

  getById(id) {
    return this.http.get<any>(`${this.baseApi}/${this.route}/${id}`)
  }

  getAll() : Observable<any[]> {
    return this.http.get<any[]>(`${this.baseApi}/${this.route}`);
  }
  
  updateStatus(id : number, trangthai: boolean) : Observable<any> {
    const object = {
      trangthai: trangthai
    };
    return this.http.patch<any>(`${this.baseApi}/${this.route}/${id}`, object);
  }

  updatePubicate(id : number, published: boolean) : Observable<any> {
    const object = {
      published: published
    };
    return this.http.patch<any>(`${this.baseApi}/${this.route}/${id}`, object);
  }

  update(id: number, data: any){
    return this.http.patch<any>(`${this.baseApi}/${this.route}/${id}`, data);
  }

  getAllLocal(): Observable<any> {
    return this.http.get<any>(`${this.baseApi}/${this.localRoute}`);
  }
}
