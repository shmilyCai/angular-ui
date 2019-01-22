import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Menu } from '../model/menu';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'api/menus';  // URL to web api

  constructor(
    private http: HttpClient,
  ) {}

   /**获取 */
   getHeroes (): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl);
  }





}
