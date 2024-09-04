import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersList } from '../interfaces/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getUsersList(params:{}):Observable<UsersList>{
    return this.http.get<UsersList>('https://ploutos-api-35ec24e583c6.herokuapp.com/api/v1/security/user', {params})
  }
}
