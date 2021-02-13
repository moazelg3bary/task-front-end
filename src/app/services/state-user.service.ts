import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StateUserService {

  constructor(private http: HttpClient, private router: Router) {}


  // get data user
  getCategories() {
    return this.http.get('getCategories')
  }

  // func helper
  navigated(url: string) {
    this.router.navigate([url]);
  }
}
