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

    if (request.url == 'https://fcm.googleapis.com/fcm/send') {
      const editReqNote = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization:
            'key=AAAA_O-R45E:APA91bHcNNm2_m9CZXhsSctnRJvs6m27RHObvREkqx-zxjQfKD7RxyWta9brhLb1HYnLn_-VUzv49Hj1BLfAs4KS38Z4aO3DlR6tgLO2cx7wNbDKD2DjC5aX1ao31xUuWIdKI9bAAztW',
        }),
      });
      return next.handle(editReqNote); 
    }

    if (request.url == 'login' || 'register') {
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
    console.log(request.url)
    console.log(this.editReq);
    return next.handle(this.editReq);
  }
}
