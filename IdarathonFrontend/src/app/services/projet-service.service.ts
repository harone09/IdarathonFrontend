import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/projetApi/projets';
@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService {

  constructor(private http: HttpClient ) {}


   getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

   get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  async create(data){
    return await this.http.post(baseUrl, data).toPromise();
  }

  async update(id, data){
    return this.http.put(`${baseUrl}/${id}`, data).toPromise();
  }

  async delete(id) {
    return this.http.delete(`${baseUrl}/${id}`).toPromise();
  }
}
