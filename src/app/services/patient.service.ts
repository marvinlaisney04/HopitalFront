import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';

const baseUrl = 'http://localhost:8080/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(baseUrl);
  }

  get(id: number): Observable<Patient> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: Patient): Observable<Object> {
    return this.http.post(baseUrl, data);
  }

  update(id: number, data: Patient): Observable<Object> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<Object> {
    return this.http.delete(baseUrl);
  }

  // findByTitle(title: any): Observable<Patient[]> {
  //   return this.http.get<Patient[]>(`${baseUrl}?title=${title}`);
  // }

}
