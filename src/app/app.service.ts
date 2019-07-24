import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './profile-screening/screenings.model';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  public userData: Data[] = [];

  constructor(private http: HttpClient) { }
  public getEmployeeData(): Observable<any> {
    return this.http.get('./assets/screenings.json');

  }
}

