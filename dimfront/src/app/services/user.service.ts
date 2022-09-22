import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'http://localhost:8000';

  constructor(private http:HttpClient) { }








  listUsers(){
    return this.http.get<any>(this.url+'/api/users');
  }
  httpOptions= {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addUser(user:any): Observable<any>{
    return this.http.post<any>(this.url+'/api/users', user, this.httpOptions);
  }

  find(id: number): Observable<any>{
    return this.http.get(this.url+'/api/user/'+id);
  }

  update(id: number, user:any): Observable<any>{
    return this.http.put(this.url+'/api/user/'+id, user, this.httpOptions);
  }

  deleteUser(id: any): Observable<any>{
    return this.http.delete<any>(this.url+'/api/user/'+id, this.httpOptions);
  }
}
