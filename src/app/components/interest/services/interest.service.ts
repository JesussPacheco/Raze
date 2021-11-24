import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interest } from '../model/interest.model';

const baseUrl = 'https://razeapp-tf1.herokuapp.com/api/v1/interests';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Interest[]> {
    return this.http.get<Interest[]>(baseUrl);
  }

  get(id: any): Observable<Interest> {
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

  findByTitle(title: any): Observable<Interest[]> {
    return this.http.get<Interest[]>(`${baseUrl}?title=${title}`);
  }
}
