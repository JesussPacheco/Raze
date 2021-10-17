import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel} from "../model/post.model";

const baseUrl = 'http://localhost:3000/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsServices {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(baseUrl);
  }

  get(id: any): Observable<PostModel> {
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

  findByTitle(title: any): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${baseUrl}?title=${title}`);
  }
}
