import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TGHttpClient } from '@techgrains/core';
import { environment } from '../enviroments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: TGHttpClient) {}
  getLoginDetail(requestData: any): Observable<any> {
    console.log('applyMock', environment.applyMock);
    return this.http.post('/posts', requestData);
  }
}
