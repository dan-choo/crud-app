import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Name } from './name';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class NameServiceService {

  private namesURL: string;

  constructor(private http: HttpClient) {
    this.namesURL = 'http://localhost:8080/';
   }

  public findAll(): Observable<Name[]> {
    return this.http.get<Name[]>(this.namesURL+'names');
  }

  public save(name: Name) {
    return this.http.post<Name[]>(this.namesURL+'name', name);
  }
}
