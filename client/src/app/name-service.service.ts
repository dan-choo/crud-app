import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Name } from './name';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class NameServiceService {

  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:8080/';
   }

  public findAll(): Observable<Name[]> {
    return this.http.get<Name[]>(this.baseURL+'names');
  }

  public save(name: Name) {
    const headers = { 'Content-Type': 'application/json'}  
    const body=JSON.stringify(name);
    return this.http.post<Name>(this.baseURL+'name', body, {'headers': headers});
  }
}
