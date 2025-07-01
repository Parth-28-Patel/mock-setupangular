import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  auth_token = '3867248932732irhiny923r';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
        'X-Client': 'LipiSearch',
        'X-Platform': 'Web',
        'X-App-Version': '1.0.0',
        'Sec-Ch-Ua-Platform': 'MacIntel',
      },
    });

    return next.handle(authReq);
  }
}
