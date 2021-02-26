import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from "rxjs/operators";
import {User} from "../Models/User";


const baseUrl = 'http://localhost:1926/projetApi/projets';
const baseUrlPhase='http://localhost:1926/projetApi/phases';
const baseUrlTache='http://localhost:1926/projetApi/taches';
@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient ) {}


   async getAll(): Promise<Observable<any>> {
    return await Promise.resolve(this.http.get(baseUrl));
  }

   async get(id): Promise<Observable<any>> {
    return await Promise.resolve(this.http.get(`${baseUrl}/${id}`));
  }

   create(data): Observable<any>{
    console.log("in service create");
    return this.http.post(baseUrl, data, this.httpOptions).pipe(
      catchError(this.handleError<User[]>('updateUser', []))
    );
  }

  async update(id, data){
    return await Promise.resolve(this.http.put(`${baseUrl}/${id}`, data));
  }

  async delete(id) {
    return await Promise.resolve(this.http.delete(`${baseUrl}/${id}`));
  }


  async getPhase(id): Promise<Observable<any>> {
    return await Promise.resolve(this.http.get(`${baseUrlPhase}/${id}`));
  }
   createPhase(id,data){
      return this.http.post(`${baseUrlPhase}/${id}`, data);
  }

  async updatePhase(id, data){
    return await Promise.resolve(this.http.put(`${baseUrlPhase}/${id}`, data));
  }

  async deletePhase(id) {
    return await Promise.resolve(this.http.delete(`${baseUrlPhase}/${id}`));
  }

  async getTache(id): Promise<Observable<any>> {
    return await Promise.resolve(this.http.get(`${baseUrlTache}/${id}`));
  }
   createTache(id,data){
      return this.http.post(`${baseUrlTache}/${id}`, data);
  }

  async updateTache(id, data){
    return await Promise.resolve(this.http.put(`${baseUrlTache}/${id}`, data));
  }

  async deleteTache(id) {
    return await Promise.resolve(this.http.delete(`${baseUrlTache}/${id}`));
  }


  /////////////////////////////////////////
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }; }
}
