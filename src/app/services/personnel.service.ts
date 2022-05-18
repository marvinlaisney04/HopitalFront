import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personnel } from '../models/personnel.model';

const baseUrl = 'http://localhost:8080/api/personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Personnel[]> {
    return this.http.get<Personnel[]>(`${baseUrl}/`);
  }

  get(id: number): Observable<Personnel> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: Personnel): Observable<Object> {
    return this.http.post(baseUrl, data);
  }

  update(id: number, data: Personnel): Observable<Object> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<Object> {
    return this.http.delete(baseUrl);
  }

  // findByTitle(title: any): Observable<Personnel[]> {
  //   return this.http.get<Personnel[]>(`${baseUrl}?title=${title}`);
  // }
}
