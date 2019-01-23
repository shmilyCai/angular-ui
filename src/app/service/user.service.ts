import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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
  ) { }

  /**获取 list*/
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  //获取单个的详情
  getUser(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl, user, httpOptions);
  }

  //删除
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<User>(url, httpOptions);
  }

}
