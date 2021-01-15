import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class RestApiLoginService {

  constructor(private http:HttpClient) { 
   
  }
  public login(username:string,password:string){
     const headers = new HttpHeaders ({Authorization :'Basic'+btoa(username+":"+password)})
    return this.http.get(baseUrl,{headers,responseType:'text' as 'json'})
  }
  public Home(){
    let username="test";
    let password ="test";
    const headers = new HttpHeaders ({Authorization :'Basic'+btoa(username+":"+password)})
   return this.http.get(baseUrl,{headers})
 }
}
