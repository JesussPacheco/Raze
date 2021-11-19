import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BottomModel} from "../model/bottom.model";

const baseUrl = 'http://localhost:3000/bottom';

@Injectable({
  providedIn: 'root'
})
export class BottomServices {

  constructor(private http: HttpClient) { }

  getAll(): Observable<BottomModel[]> {
    return this.http.get<BottomModel[]>(baseUrl);
  }

  get(id: any): Observable<BottomModel> {
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

  findByName(name: any): Observable<BottomModel[]> {
    return this.http.get<BottomModel[]>(`${baseUrl}?name=${name}`);
  }
}
