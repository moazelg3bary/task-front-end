import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER = 'http://elmwslaty.com/api/user';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  // init names & type var
  editReq: any

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url == "login" ||  "register") {

      this.editReq = request.clone({
        url: `${SERVER}/${request.url}`,
        headers: new HttpHeaders({
          apiSecret: 'N1Sz55roEJcEgAOnIvh',
        }),
      });

    } 

    if (request.url == 'getCategories') {

      this.editReq = request.clone({
        url: `${SERVER}/${request.url}`,
        headers: new HttpHeaders({
          lat: '8547552125',
          lon: '2542511225',
          apiSecret: 'N1Sz55roEJcEgAOnIvh',
          Authorization: `Bearer ${localStorage.getItem('TOKEN_USER')}`,
        }),
      });      

    } else {

      this.editReq = request.clone({
        url: `${SERVER}/${request.url}`,
        headers: new HttpHeaders({
          apiSecret: 'N1Sz55roEJcEgAOnIvh',
          Authorization: `Bearer ${localStorage.getItem('TOKEN_USER')}`,
        }),
      });

    }

    return next.handle(this.editReq);
  }
}
