import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopModel} from "../model/top.model";

const baseUrl = 'https://razeapp-tf1.herokuapp.com/api/v1/top';

@Injectable({
  providedIn: 'root'
})
export class TopServices {

  constructor(private http: HttpClient) { }

  getAll(): Observable<TopModel[]> {
    return this.http.get<TopModel[]>(baseUrl);
  }

  get(id: any): Observable<TopModel> {
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

  findByName(name: any): Observable<TopModel[]> {
    return this.http.get<TopModel[]>(`${baseUrl}?name=${name}`);
  }
}
