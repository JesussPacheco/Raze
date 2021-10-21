import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FashionModel } from "../model/fashion.model";

const baseUrl = 'http://localhost:3000/fashions';

@Injectable({
  providedIn: 'root'
})
export class FashionsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<FashionModel[]> {
    return this.http.get<FashionModel[]>(baseUrl);
  }

  get(id: any): Observable<FashionModel> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByTitle(title: any): Observable<FashionModel[]> {
    return this.http.get<FashionModel[]>(`${baseUrl}?title=${title}`);
  }
}
