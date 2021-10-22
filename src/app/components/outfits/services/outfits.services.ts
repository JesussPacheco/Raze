import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {OutfitModel} from "../model/outfit.model";

const baseUrl = 'http://localhost:3000/Outfits';

@Injectable({
  providedIn: 'root'
})
export class OutfitsServices {

  constructor(private http: HttpClient) { }

  getAll(): Observable<OutfitModel[]> {
    return this.http.get<OutfitModel[]>(baseUrl);
  }

  get(id: any): Observable<OutfitModel> {
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

  findByName(name: any): Observable<OutfitModel[]> {
    return this.http.get<OutfitModel[]>(`${baseUrl}?name=${name}`);
  }

  findType(type: any): Observable<OutfitModel[]> {
    return this.http.get<OutfitModel[]>(`${baseUrl}?typeId=${type}`);
  }
}
