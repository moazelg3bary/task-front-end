import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateUserService } from 'src/app/services/state-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // init names & type vars
  token: string | any;
  state: boolean = false;

  constructor(private state_user: StateUserService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // get token user
    this.token = localStorage.getItem('TOKEN_USER');      

    // check if token true
    if(this.token) {
      this.state = false;
      this.state_user.navigated('/')
    } else {
      this.state = true
    }

    // guard return state user
    return this.state;
  }
  
}
