import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {User} from '../Models/User';
import {Autorisation} from '../Models/Autorisation';
import {AuthRequest} from "../Models/AuthRequest";
import {AuthResponse} from "../Models/AuthResponse";

@Injectable({
  providedIn: 'root'
})
export class RestApiLoginService {
  private url = 'http://localhost:1926/projetApi/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {

  }
  //////////////////////////////////////
  signIn( req: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.url + 'authenticate', req, this.httpOptions)
      .pipe(
        catchError(this.handleError<AuthResponse>('Authentication', ))
      );
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
