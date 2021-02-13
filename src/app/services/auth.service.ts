import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  // start functionality authentication

  //method post
  logiIn(data: {}) {
    return this.http.post('login', data);
  }

  register(data: {}) {
    return this.http.post('register', data);
  }

  //method get
  getCountries() {
    return this.http.get('getCountries')
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  // start functionality authentication
}
