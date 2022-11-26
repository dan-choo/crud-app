import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:8080/users';
   }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL+'/all');
  }

  public save(user: User) {
    const headers = { 'Content-Type': 'application/json'}  
    const body=JSON.stringify(user);
    return this.http.post<User>(this.baseURL+'/add', body, {'headers': headers});
  }
}
