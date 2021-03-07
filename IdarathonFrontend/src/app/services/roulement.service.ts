import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {User} from '../Models/User';
import {Autorisation} from '../Models/Autorisation';

@Injectable({
  providedIn: 'root'
})
export class RoulementService {
  private url = 'http://localhost:1926/projetApi/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': localStorage.getItem('JwtToken')
  })
  };
  constructor(private http: HttpClient) {

  }
  ///////////////////////////////////////
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'Users', this.httpOptions)
      .pipe(
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }
  getUserAuts(id: number): Observable<Autorisation[]> {

    return this.http.get<Autorisation[]>(this.url + 'User/auts/' + id)
      .pipe(
        catchError(this.handleError<Autorisation[]>('getUserAuts', []))
      );
  }
  updateUser( u: User): Observable<User[]> {
      return this.http.put<User[]>(this.url + 'user/update/' + u.id, u, this.httpOptions)
        .pipe(
    catchError(this.handleError<User[]>('updateUser', []))
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
