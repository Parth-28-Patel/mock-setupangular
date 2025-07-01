import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TGHttpClient } from '@techgrains/core';
import { environment } from '../enviroments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: TGHttpClient) {}
  getUserList(requestData: any): Observable<any> {
    console.log('applyMock', environment.applyMock);
    return this.http.get('/users', requestData);
  }
}
