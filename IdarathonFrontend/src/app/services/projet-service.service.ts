import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/projetApi/projets';
@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService {

  constructor(private http: HttpClient ) {}


   async getAll(): Promise<Observable<any>> {
    return await Promise.resolve(this.http.get(baseUrl));
  }

   async get(id): Promise<Observable<any>> {
    return await Promise.resolve(this.http.get(`${baseUrl}/${id}`));
  }

  async create(data){
    return await Promise.resolve(this.http.post(baseUrl, data));
  }

  async update(id, data){
    return await Promise.resolve(this.http.put(`${baseUrl}/${id}`, data));
  }

  async delete(id) {
    return await Promise.resolve(this.http.delete(`${baseUrl}/${id}`));
  }
}
