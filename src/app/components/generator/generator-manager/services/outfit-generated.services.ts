import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {OutfitGeneratedModel} from "../model/outfit-generated.model";

const baseUrl = 'http://localhost:3000/outfitgenerated';

@Injectable({
  providedIn: 'root'
})

export class OutfitGeneratedServices{
  constructor(private http: HttpClient) { }

  getAll(): Observable<OutfitGeneratedModel[]> {
    return this.http.get<OutfitGeneratedModel[]>(baseUrl);
  }

  get(id: any): Observable<OutfitGeneratedModel> {
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

  findByUser(userId: any): Observable<OutfitGeneratedModel[]> {
    return this.http.get<OutfitGeneratedModel[]>(`${baseUrl}?userId=${userId}`);
  }
}
