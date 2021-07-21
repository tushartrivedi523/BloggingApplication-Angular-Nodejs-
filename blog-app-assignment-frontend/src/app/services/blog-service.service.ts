import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/models';

const baseUrl = 'http://localhost:3000/api/blogApp';

@Injectable({
  providedIn: 'root'
})


export class BlogServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Blog[]> {
    console.log(baseUrl)
    return this.http.get<Blog[]>(baseUrl);
  }

  get(id: any): Observable<Blog> {
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

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${baseUrl}?title=${title}`);
  }
}
