import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from "rxjs/operators";
import {User} from "../Models/User";


const baseUrl = 'http://localhost:1926/projetApi/projets';
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
