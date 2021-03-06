import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {OutfitType} from "../model/outfit-type";
const baseUrl = 'https://razeapp-tf1.herokuapp.com/api/v1/outfiTypes';
@Injectable({
  providedIn: 'root'
})
export class OutfitTypesService {
  constructor(private http:HttpClient) { }
  getAll(): Observable<OutfitType[]> {
    return this.http.get<OutfitType[]>(baseUrl);
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
  findByPostId(id: any): Observable<OutfitType[]> {
    return this.http.get<OutfitType[]>(`http://localhost:3000/posts/${id}/comments`);
  }
}
