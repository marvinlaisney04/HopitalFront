import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';

const baseUrl = 'http://localhost:8080/api/patient';
// const headerDict = {
//   'Content-Type': 'application/json',
//   'Accept': 'application/json',
//   'Access-Control-Allow-Headers': 'Content-Type',
// }

// const requestOptions = {                                                                                                                                                                                 
//   headers: new HttpHeaders(headerDict), 
// };

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(baseUrl);
  }

  get(id: number): Observable<Patient> {
    return this.http.get(`${baseUrl}/${id}`, optionRequete);
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
