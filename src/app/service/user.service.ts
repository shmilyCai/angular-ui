import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../model/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'api/users';  // URL to web api

  constructor(
    private http: HttpClient,
  ){}

   /**获取 */
   getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }



}
