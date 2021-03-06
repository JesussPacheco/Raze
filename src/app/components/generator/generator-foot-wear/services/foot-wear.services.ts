import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FootWearModel} from "../model/foot-wear.model";

const baseUrl = 'https://razeapp-tf1.herokuapp.com/api/v1/footwear';

@Injectable({
  providedIn: 'root'
})
export class FootWearServices {

  constructor(private http: HttpClient) { }

  getAll(): Observable<FootWearModel[]> {
    return this.http.get<FootWearModel[]>(baseUrl);
  }

  get(id: any): Observable<FootWearModel> {
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

  findByName(name: any): Observable<FootWearModel[]> {
    return this.http.get<FootWearModel[]>(`${baseUrl}?name=${name}`);
  }
}
